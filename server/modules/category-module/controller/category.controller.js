const pool = require("../../../../database");
const logger = require("../../../common/logger");

exports.createCategory = async (req, res, next) => {
  const { body } = req;
  const { name, slug, image, short_description } = body;
  console.log("body", body);
  res.status(200).json({ message: "uploaded" });

  // const statement = `INSERT INTO dog_category (name, slug, image, short_description)  values(
  //   '${name}',
  //   '${slug}',
  //   '${image}',
  //   '${short_description}'
  // )`;
};
