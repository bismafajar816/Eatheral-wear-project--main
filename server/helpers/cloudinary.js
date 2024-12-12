const cloudinary = require("cloudinary").v2;
const multer = require("multer");


cloudinary.config({
  cloud_name: "dt5bzzsiy",
  api_key: "652685838277864",
  api_secret: "qXtpqTdV12owU_tdRG9vLQJT3wU",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
