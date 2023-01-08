const pool = require("../../../database");
const logger = require("../../common/logger");

exports.createProduct = async (req, res, next) => {
  const { body } = req;
  const {
    name,
    slug,
    file_name,
    short_description,
    description,
    category_id,
    price,
    mrp,
  } = body;

  const getDiscount = () => {
    return (mrp * (100 - price)) / 100;
  };

  const statement = `INSERT INTO dog_product (name, slug, image, short_description, description, category_id, price, mrp, discount ) values(
    '${name}',
    '${slug}',
    '${file_name}',
    '${short_description}',
    '${description}',
    ${category_id},
    ${price},
    ${mrp},
    ${getDiscount()}
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
          message: "Product added successfuly",
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
