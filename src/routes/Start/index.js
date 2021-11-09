module.exports = (app) => {
  const controller = app.controllers.Start.index;

  app.route("/").get(controller.init);
};
