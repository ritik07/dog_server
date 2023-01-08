const multer = require("multer");
const path = require("path");

let FILE_NAME = "";

const imageStorage = multer.diskStorage({
  destination: "file", // Destination to store image
  filename: (req, file, cb) => {
    FILE_NAME =
      file.fieldname + "_" + Date.now() + path.extname(file.originalname);
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
    // file.fieldname is name of the field (image), path.extname get the uploaded file extension
  },
  limits: {
    fileSize: 1000000, // 1000000 Bytes = 1 MB
  },
});

const upload = multer({
  // dest: "uploads/",
  storage: imageStorage,
}).single("image");

exports.postFile = async (req, res, next) => {
  upload(req, res, function (err, data) {
    req.body.file_name = FILE_NAME;
    next();
    // res.status(200).json({ message: "OK" });
    console.log(req.file, req.body);
  });
};

/* 

  // fileFilter(req, file, cb) {
  //   if (!file.originalname.match(/\.(png|jpg)$/)) {
  //     // upload only png and jpg format
  //     return cb(new Error("Please upload a Image"));
  //   }
  //   cb(undefined, true);
  // },

*/
