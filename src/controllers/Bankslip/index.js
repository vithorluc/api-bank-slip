import dotenv from "dotenv";
dotenv.config();

module.exports = (app) => {
  const bankslip = app.services.Bankslip.BankslipService;

  const index = (req, res) => {
    const { code } = req.params;

    bankslip
      .validateBankslip(code)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };

  return {
    index,
  };
};
