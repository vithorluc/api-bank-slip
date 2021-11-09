import { indentifyTypeCode } from "./../../utils/indentifyTypeCode";
import { validateCodeWithCv } from "./../../utils/validateCodeWithCv";
import { lineTypeble2CodeBar } from "./../../utils/lineTypeble2CodeBar";
import { identifyDate } from "./../../utils/identifyDate";
import { identifyValue } from "./../../utils/identifyValue";

const validateBankslip = async (code) => {
  return new Promise((resolve, reject) => {
    let typeCode = indentifyTypeCode(code);

    let result = {};
    code = code.replace(/[^0-9]/g, "");

    if (code.length == 36) {
      code = code + "00000000000";
    } else if (code.length == 46) {
      code = code + "0";
    }

    if (
      code.length != 44 &&
      code.length != 46 &&
      code.length != 47 &&
      code.length != 48
    ) {
      reject({
        error: `O código inserido possui ${code.length} dígitos. Por favor insira uma numeração válida. Códigos de barras SEMPRE devem ter 44 caracteres numéricos. Linhas digitáveis podem possuir 46 (boletos de cartão de crédito), 47 (boletos bancários/cobrança) ou 48 (contas convênio/arrecadação) caracteres numéricos. Qualquer caractere não numérico será desconsiderado.`,
      });
    } else if (
      code.substr(0, 1) == "8" &&
      (code.length == 46 || code.length == 47)
    ) {
      reject({
        error:
          "Este tipo de boleto deve possuir um código de barras 44 caracteres numéricos. Ou linha digitável de 48 caracteres numéricos.",
      });
    } else if (!validateCodeWithCv(code, typeCode)) {
      reject({
        error:
          "A validação do dígito verificador falhou. Tem certeza que inseriu a numeração correta?",
      });
    } else {
      switch (typeCode) {
        case "DIGITABLE_LINE":
          result.barCode = lineTypeble2CodeBar(code);
          result.expirationDate = identifyDate(code, "DIGITABLE_LINE");
          result.amount = identifyValue(code, "DIGITABLE_LINE").toFixed(2);
          break;
        case "CODE_BAR":
          result.barCode = code;
          result.expirationDate = identifyDate(code, "CODE_BAR");
          result.amount = identifyValue(code, "CODE_BAR").toFixed(2);
          break;
        default:
          break;
      }
    }

    resolve(result);
  });
};

export { validateBankslip };
