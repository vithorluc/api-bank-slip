/**
 * Identifies the type of bank slip entered from the validation of its initial two digits.
 *
 * -------------
 *
 * @param {string} code Bankslip numbering
 *
 * -------------
 *
 * @return {string} BANK
 * @return {string} COLLECTION_CITY OFFICE
 * @return {string} GOVERNMENTAL_ORGAO_ORGAO_ORGAO_RES
 * @return {string} COLLECTION_TRANSIT_FEES
 * @return {string} SANITATION_CONVENTION
 * @return {string} CONVENIO_ENERGIA_ELETRICA_E_GAS
 * @return {string} CONVENIO_TELECOMUNICACOES
 * @return {string} OTHERS
 * @return {string} CREDIT_CARD
 */
const indentifyBankslipType = (code) => {
  code = code.replace(/[^0-9]/g, "");

  if (typeof code !== "string") throw new TypeError("Insert a valid string!");

  if (
    code.substr(-14) == "00000000000000" ||
    code.substr(5, 14) == "00000000000000"
  ) {
    return "CARTAO_DE_CREDITO";
  } else if (code.substr(0, 1) == "8") {
    if (code.substr(1, 1) == "1") {
      return "ARRECADACAO_PREFEITURA";
    } else if (code.substr(1, 1) == "2") {
      return "CONVENIO_SANEAMENTO";
    } else if (code.substr(1, 1) == "3") {
      return "CONVENIO_ENERGIA_ELETRICA_E_GAS";
    } else if (code.substr(1, 1) == "4") {
      return "CONVENIO_TELECOMUNICACOES";
    } else if (code.substr(1, 1) == "5") {
      return "ARRECADACAO_ORGAOS_GOVERNAMENTAIS";
    } else if (code.substr(1, 1) == "6" || code.substr(1, 1) == "9") {
      return "OUTROS";
    } else if (code.substr(1, 1) == "7") {
      return "ARRECADACAO_TAXAS_DE_TRANSITO";
    }
  } else {
    return "BANCO";
  }
};

export { indentifyBankslipType };
