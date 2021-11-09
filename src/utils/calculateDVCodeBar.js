/**
 * Calculates the check digit of all barcode numbers
 *
 * -------------
 *
 * @param {string} code Boleto numbering
 * @param {int} codePosition Position where the check digit should be found
 * @param {int} mod Module 10 or Module 11
 *
 * -------------
 *
 * @return {string} number
 */
const calculateDVCodeBar = (code, codePosition, mod) => {
  code = code.replace(/[^0-9]/g, "");

  code = code.split("");
  code.splice(codePosition, 1);
  code = code.join("");

  if (mod === 10) {
    return calculaMod10(code);
  } else if (mod === 11) {
    return calculaMod11(code);
  }
};

export { calculateDVCodeBar };
