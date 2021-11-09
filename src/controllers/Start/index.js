import dotenv from "dotenv";
dotenv.config();

module.exports = (app) => {
  const start = app.services.Start.StartService;

  const init = (req, res) => {
    try {
      const message = start.start();

      res.status(200).json(message);
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  };

  return {
    init,
  };
};
