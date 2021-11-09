import { indentifyBankslipType } from "./indentifyBankslipType";
import { calculateMod10 } from "./calculateMod10";
import { calculateMod11 } from "./calculateMod11";
import { indentifyReference } from "./indentifyReference";
import { calculateDVCodeBar } from "./calculateDVCodeBar";

const validateCodeWithCv = (code, typeCode) => {
  code = code.replace(/[^0-9]/g, "");
  let bankSlipType;

  let result;

  if (typeCode === "DIGITABLE_LINE") {
    bankSlipType = indentifyBankslipType(code, "DIGITABLE_LINE");

    if (bankSlipType == "BANCO" || bankSlipType == "CARTAO_DE_CREDITO") {
      const block1 = code.substr(0, 9) + calculateMod10(code.substr(0, 9));
      const block2 = code.substr(10, 10) + calculateMod10(code.substr(10, 10));
      const block3 = code.substr(21, 10) + calculateMod10(code.substr(21, 10));
      const block4 = code.substr(32, 1);
      const block5 = code.substr(33);

      result = (block1 + block2 + block3 + block4 + block5).toString();
    } else {
      const identificationRealValueorReference = indentifyReference(code);
      let block1;
      let block2;
      let block3;
      let block4;

      if (identificationRealValueorReference.mod == 10) {
        block1 = code.substr(0, 11) + calculateMod10(code.substr(0, 11));
        block2 = code.substr(12, 11) + calculateMod10(code.substr(12, 11));
        block3 = code.substr(24, 11) + calculateMod10(code.substr(24, 11));
        block4 = code.substr(36, 11) + calculateMod10(code.substr(36, 11));
      } else if (identificationRealValueorReference.mod == 11) {
        block1 = code.substr(0, 11);
        block2 = code.substr(12, 11);
        block3 = code.substr(24, 11);
        block4 = code.substr(36, 11);

        let dv1 = parseInt(code.substr(11, 1));
        let dv2 = parseInt(code.substr(23, 1));
        let dv3 = parseInt(code.substr(35, 1));
        let dv4 = parseInt(code.substr(47, 1));

        let valid =
          calculateMod11(block1) == dv1 &&
          calculateMod11(block2) == dv2 &&
          calculateMod11(block3) == dv3 &&
          calculateMod11(block4) == dv4;

        return valid;
      }

      result = block1 + block2 + block3 + block4;
    }
  } else if (typeCode === "CODE_BAR") {
    bankSlipType = identificarbankSlipType(code);

    if (bankSlipType == "BANCO" || bankSlipType == "CARTAO_DE_CREDITO") {
      const DV = calculateDVCodeBar(code, 4, 11);
      result = code.substr(0, 4) + DV + code.substr(5);
    } else {
      const identificationRealValueorReference = indentifyReference(code);

      result = code.split("");
      result.splice(3, 1);
      result = result.join("");

      const DV = calculateDVCodeBar(
        code,
        3,
        identificationRealValueorReference.mod
      );
      result = result.substr(0, 3) + DV + result.substr(3);
    }
  }

  return code === result;
};

export { validateCodeWithCv };
