import { indentifyReference } from "./indentifyReference";
/**
 * Identifies the value in the BAR CODE of the 'Collection' type payment slip
 *
 * -------------
 *
 * @param {string} code Boleto numbering
 * @param {string} typeCode type of code inserted (CODIGO_DE_BARRAS / LINHA_DIGITAVEL)
 *
 * -------------
 *
 * @return {string} endValue
 */
const IdentifyValueCodeBarCollection = (code, typeCode) => {
  code = code.replace(/[^0-9]/g, "");
  const isEffectiveValue = indentifyReference(code).effective;

  let bankSlipValue = "";
  let finalValue;

  if (isEffectiveValue) {
    if (typeCode == "LINHA_DIGITAVEL") {
      bankSlipValue = code.substr(4, 14);
      bankSlipValue = code.split("");
      bankSlipValue.splice(11, 1);
      bankSlipValue = bankSlipValue.join("");
      bankSlipValue = bankSlipValue.substr(4, 11);
    } else if (typeCode == "CODIGO_DE_BARRAS") {
      bankSlipValue = code.substr(4, 11);
    }

    finalValue = bankSlipValue.substr(0, 9) + "." + bankSlipValue.substr(9, 2);

    let char = finalValue.substr(1, 1);
    while (char === "0") {
      finalValue = substringReplace(finalValue, "", 0, 1);
      char = finalValue.substr(1, 1);
    }
  } else {
    finalValue = 0;
  }

  return finalValue;
};

export { IdentifyValueCodeBarCollection };
