module.exports = (app) => {
  const controller = app.controllers.Bankslip.index;

  app.route("/bank-slip/:code").get(controller.index);
};
