import { app } from "./../../server";

describe("Test Bankslip", () => {
  it("should receive a bankslip code and return a barCode, expirationDate and an amount", (done) => {
    app.services.Bankslip.BankslipService.validateBankslip(
      "21290001192110001210904475617405975870000002000"
    ).then((response) => {
      expect(response).toEqual({
        barCode: "21299758700000020000001121100012100447561740",
        expirationDate: "2018-07-16",
        amount: 20,
      });
      done();
    });
  });
});
