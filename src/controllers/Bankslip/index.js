import dotenv from "dotenv";
dotenv.config();

module.exports = (app) => {
  const index = (req, res) => {
    const { code } = req.params;

    console.log(code);

    try {
      res.status(200).send("ok");
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  };

  return {
    index,
  };
};
