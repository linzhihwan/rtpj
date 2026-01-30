const express = require("express");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
  destination: "C:/DTIT",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ success: true });
});

app.listen(8080, () => {
  console.log("서버 실행중 http://localhost:8080");
});
