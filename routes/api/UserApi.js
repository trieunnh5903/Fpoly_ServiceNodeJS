const express = require("express");
const router = express.Router();
const userController = require("../../components/users/UserController");
const validation = require("../../middleware/ValidationRegister");
const upload = require("../../middleware/UploadImage");
const IP = require("../../config/ip");
const UploadImage = require("../../middleware/UploadImage");
//localhost:3000/api/user/login
router.post("/login", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await userController.login(email, password);
    if (result) {
      return res.status(200).json({ error: false, user: result });
    } else {
      return res
        .status(200)
        .json({ error: true, message: "Email or password failed" });
    }
  } catch (error) {
    return res.status(400).json({ error: true, message: error });
  }
});

//localhost:3000/api/user/register
router.post(
  "/register",
  [validation.validationRegister],
  async function (req, res, next) {
    try {
      const { email, password, name } = req.body;
      const result = await userController.register(email, password, name);
      if (result) {
        return res
          .status(200)
          .json({
            error: false,
            user: { email: email, password: password, name: name },
          });
      } else {
        return res.status(200).json({ error: true, message: "Email existed" });
      }
    } catch (error) {
      return res.status(400).json({ error: true, message: error });
    }
  }
);

router.post(
  "/avatar/update",
  [UploadImage.single("image")],
  async (req, res, next) => {
    try {
      const { id } = req.body;
      let { file, body } = req;
      if (file) {
        let url = `http://${IP}:3000/images/${file.filename}`;
        // body = { ...body, image: image };
        console.log("????????????????? param: " + id);
        console.log("????????????????? param: " + url);
        // const { image } = body;
        // const result = await userController.uploadAvatar(id, url);
        // console.log("????????????????? result: " + result);
        // if (result) {
        //     return res.status(200).json({ error: false, url });
        // }
        // return res.status(200).json({ error: false, url });
      } else {
        console.log("upload avatar error : not get image");
      }
      return res.status(400).json({ error: true });
    } catch (error) {
      console.log(error);
    }
  }
);

router.post("/sendmail", async (req, res, next) => {
  try {
    const { email, subject } = req.body;
    let content = "<h1>Thanh toán thành công<h1>";
    const result = userController.sendMail(email, subject, content);
  } catch (error) {
    console.log("send mail error: ", error);
    return res.status(400).json({ error: true, message: error });
  }
});
module.exports = router;
