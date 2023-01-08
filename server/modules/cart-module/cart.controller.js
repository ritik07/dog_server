const pool = require("../../../database");
const logger = require("../../common/logger");

// if user's cart session found then find and return response of cart detail by session id
exports.getCartBySessionId = async (req, res, next) => {
  const { body } = req;
  const { session_id } = body;

  const statement = `SELECT * FROM dog_cart_item WHERE session_id = ${session_id}`;

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
          message: "User's cart session & details found!",
          status: 200,
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

exports.createCart = async (req, res, next) => {
  const { body } = req;
  const { product_id, user_id, quantity, total, session_id } = body;

  const statement = `INSERT INTO dog_cart_item (
    product_id, 
    user_id, 
    quantity, 
    session_id,
    total
    ) 
    values(
    ${product_id},
    ${user_id},
    ${quantity},
    ${session_id},
    ${total}
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
          message: "cart created successfuly",
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

exports.updateCart = async (req, res, next) => {
  const { body } = req;
  const { product_id, user_id, quantity, total } = body;

  const statement = `UPDATE dog_cart_item SET quantity=${quantity}, total=${total} WHERE `;

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
          message: "cart created successfuly",
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
