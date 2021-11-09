import { indentifyBankslipType } from "./indentifyBankslipType";
import moment from "moment-timezone";
/**
 * Identifies the bank slip due date factor
 *
 * -------------
 *
 * @param {string} code Bankslip numbering
 * @param {string} typeCode type of code inserted (CODE_BAR / DIGITABLE_LINE)
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

  if (typeCode === "CODE_BAR") {
    if (bankSlipType == "BANCO" || bankSlipType == "CARTAO_DE_CREDITO") {
      factorDate = code.substr(5, 4);
    } else {
      factorDate = "0";
    }
  } else if (typeCode === "DIGITABLE_LINE") {
    if (bankSlipType == "BANCO" || bankSlipType == "CARTAO_DE_CREDITO") {
      factorDate = code.substr(33, 4);
    } else {
      factorDate = "0";
    }
  }

  const date = bankSlipDate.add(Number(factorDate), "days");

  return bankSlipDate.toDate().toISOString().split("T")[0];
};

export { identifyDate };
