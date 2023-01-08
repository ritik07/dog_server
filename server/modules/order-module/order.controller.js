const pool = require("../../../database");
const logger = require("../../common/logger");

// SELECT * FROM dog_category WHERE ID IN (8, 9,10,11)

exports.createOrder = async (req, res, next) => {
  const { body } = req;
  const {
    user_id,
    slug,
    transaction_id,
    payment_mode,
    final_amount_paid,
    coupon_applied,
    success,
    coupon_discount_amount,
    products,
  } = body;

  const parseProduct = () => {
    return products.join(",");
  };

  const statement = `INSERT INTO dog_order (
    user_id, 
    slug, 
    transaction_id, 
    payment_mode, 
    final_amount_paid, 
    coupon_applied, 
    success, 
    coupon_discount_amount, 
    products 
    ) 
    values(
    '${user_id}',
    '${slug}',
    '${transaction_id}',
    '${payment_mode}',
    '${final_amount_paid}',
    ${coupon_applied},
    ${success},
    ${coupon_discount_amount},
    ${parseProduct()}
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
