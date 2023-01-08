const pool = require("../../../database");
const logger = require("../../common/logger");

exports.createCategory = async (req, res, next) => {
  const { body } = req;
  const { name, slug, file_name, short_description } = body;

  const statement = `INSERT INTO dog_category (name, slug, image, short_description)  values(
    '${name}',
    '${slug}',
    '${file_name}',
    '${short_description}'
  )`;

  pool.query(statement, (err, result, fileds) => {
    try {
      if (err) {
        res.status(500).json({
          status: 500,
          message: err,
          success: false,
        });
        return;
      } else if (result) {
        res.status(200).json({
          status: 200,
          message: "Category added successfuly",
          success: true,
          data: result[0],
        });
      }
    } catch (error) {
      logger.error(`error/AuthController/login${error}`);
      res.status(500).json({
        message: "Ops something went wrong",
        status: 500,
        success: false,
      });
    }
  });
};
