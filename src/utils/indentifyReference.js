/**
 * Identifies the boleto reference code to determine which module
 * will be used to calculate check digits
 *
 * -------------
 *
 * @param {string} code Boleto numbering
 *
 * -------------
 *
 * @return {json} {mod, effective}
 */
const indentifyReference = (codigo) => {
  codigo = codigo.replace(/[^0-9]/g, "");

  const reference = codigo.substr(2, 1);

  if (typeof codigo !== "string") throw new TypeError("Insert a valid string!");

  switch (reference) {
    case "6":
      return {
        mod: 10,
        effective: true,
      };
    case "7":
      return {
        mod: 10,
        effective: false,
      };
    case "8":
      return {
        mod: 11,
        effective: true,
      };
    case "9":
      return {
        mod: 11,
        effective: false,
      };
    default:
      break;
  }
};

export { indentifyReference };
