/**
 * Identifies the type of code entered (based on the number of digits).
 *
 * ------------
 *
 * @param {string} code Boleto numbering
 *
 * ------------
 *
 * @return {string} BAR_CODE
 * @return {string} LINE_DIGITABLE
 */
const indentifyTypeCode = (code) => {
  if (typeof code !== "string") throw new TypeError("Insert a valid string!");

  code = code.replace(/[^0-9]/g, "");

  if (code.length == 44) {
    return "CODIGO_DE_BARRAS";
  } else if (code.length == 46 || code.length == 47 || code.length == 48) {
    return "LINHA_DIGITAVEL";
  } else {
    return "TAMANHO_INCORRETO";
  }
};

export { indentifyTypeCode };
