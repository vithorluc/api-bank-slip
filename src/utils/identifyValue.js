import { indentifyBankslipType } from "./indentifyBankslipType";
import { IdentifyValueCodeBarCollection } from "./IdentifyValueCodeBarCollection";
import { substringReplace } from "./substringReplace";
/**
 * Identifies the value in the inserted bank slip
 *
 * -------------
 *
 * @param {string} code Bankslip numbering
 * @param {string} typeCode type of code inserted (CODE_BAR / DIGITABLE_LINE)
 *
 * -------------
 *
 * @return {float} endValue
 */
const identifyValue = (code, typeCode) => {
  const bankSlipType = indentifyBankslipType(code);

  let bankSlipValue = "";
  let finalValue;

  if (typeCode == "CODE_BAR") {
    if (bankSlipType == "BANCO" || bankSlipType == "CARTAO_DE_CREDITO") {
      bankSlipValue = code.substr(9, 10);
      finalValue =
        bankSlipValue.substr(0, 8) + "." + bankSlipValue.substr(8, 2);

      let char = finalValue.substr(1, 1);
      while (char === "0") {
        finalValue = substringReplace(finalValue, "", 0, 1);
        char = finalValue.substr(1, 1);
      }
    } else {
      finalValue = IdentifyValueCodeBarCollection(code, "code_DE_BARRAS");
    }
  } else if (typeCode == "DIGITABLE_LINE") {
    if (bankSlipType == "BANCO" || bankSlipType == "CARTAO_DE_CREDITO") {
      bankSlipValue = code.substr(37);
      finalValue =
        bankSlipValue.substr(0, 8) + "." + bankSlipValue.substr(8, 2);

      let char = finalValue.substr(1, 1);
      while (char === "0") {
        finalValue = substringReplace(finalValue, "", 0, 1);
        char = finalValue.substr(1, 1);
      }
    } else {
      finalValue = IdentifyValueCodeBarCollection(code, "DIGITABLE_LINE");
    }
  }
  return parseFloat(finalValue);
};

export { identifyValue };
