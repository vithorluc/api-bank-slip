import { indentifyBankslipType } from "./indentifyBankslipType";

/**
 * Converts typeable line numbering to barcode
 *
 * -------------
 *
 * @param {string} code Boleto numbering
 *
 * -------------
 *
 * @return {string} result
 */
const lineTypeble2CodeBar = (code) => {
  code = code.replace(/[^0-9]/g, "");

  const bankSlipType = indentifyBankslipType(code);

  let result = "";

  if (bankSlipType == "BANCO" || bankSlipType == "CARTAO_DE_CREDITO") {
    result =
      code.substr(0, 4) +
      code.substr(32, 1) +
      code.substr(33, 14) +
      code.substr(4, 5) +
      code.substr(10, 10) +
      code.substr(21, 10);
  } else {
    code = code.split("");
    code.splice(11, 1);
    code.splice(22, 1);
    code.splice(33, 1);
    code.splice(44, 1);
    code = code.join("");

    result = code;
  }

  return result;
};

export { lineTypeble2CodeBar };
