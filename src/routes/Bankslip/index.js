module.exports = (app) => {
  const controller = app.controllers.Bankslip.index;

  app.route("/bankslip/:code").get(controller.index);
};
