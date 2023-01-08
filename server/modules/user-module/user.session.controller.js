const pool = require("../../../database");
const logger = require("../../common/logger");

exports.getUserSession = async (req, res, next) => {
  try {
    let { params } = req;
    let { user_id } = params;

    const statement = `SELECT * from dog_user as du 
    INNER JOIN dog_shopping_session as dss ON dss.user_id = ${user_id}
    INNER JOIN dog_address as da ON da.user_id = ${user_id}`;

    pool.query(statement, async (err, result, fields) => {
      try {
        if (err) {
          res.status(500).json({
            status: 500,
            message: err,
            success: false,
          });
        } else if (result) {
          res.status(200).json({
            status: 200,
            message: "User session found!",
            data: result[0],
            success: true,
          });
        }
      } catch (error) {
        logger.error(`${error}`);
      }
    });
    logger.info("addressController/Addaddress");
  } catch (error) {
    logger.error(`error occured ${error}`);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
    // next(error)
  }
};
