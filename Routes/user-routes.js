const express = require("express");
const { check } = require("express-validator");
const usercontrollers = require("../controllers/user-controllers");
const fileupload = require("../Middleware/file-upload");
const router = express.Router();
router.get("/", usercontrollers.getUsers);
router.post(
  "/signup",
  fileupload.single("image"),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usercontrollers.signup
);
router.post("/login", usercontrollers.login);
module.exports = router;
