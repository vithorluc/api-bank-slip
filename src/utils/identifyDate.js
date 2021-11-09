import { indentifyBankslipType } from "./indentifyBankslipType";
import moment from "moment-timezone";
/**
 * Identifies the bank slip due date factor
 *
 * -------------
 *
 * @param {string} code Boleto numbering
 * @param {string} typeCode type of code inserted (CODIGO_DE_BARRAS / LINHA_DIGITAVEL)
 *
 * -------------
 *
 * @return {Date} bankSlipDate
 */
const identifyDate = (code, typeCode) => {
  code = code.replace(/[^0-9]/g, "");
  const bankSlipType = indentifyBankslipType(code);

  let factorDate = "";
  let bankSlipDate = moment.tz("1997-10-07 20:54:59.000Z", "UTC");

  if (typeCode === "CODIGO_DE_BARRAS") {
    if (bankSlipType == "BANCO" || bankSlipType == "CARTAO_DE_CREDITO") {
      factorDate = code.substr(5, 4);
    } else {
      factorDate = "0";
    }
  } else if (typeCode === "LINHA_DIGITAVEL") {
    if (bankSlipType == "BANCO" || bankSlipType == "CARTAO_DE_CREDITO") {
      factorDate = code.substr(33, 4);
    } else {
      factorDate = "0";
    }
  }

  bankSlipDate.add(Number(factorDate), "days");

  return bankSlipDate.toDate();
};

export { identifyDate };
