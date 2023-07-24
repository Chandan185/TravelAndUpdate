const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const placescontrollers = require("../controllers/places-controllers");
const fileupload = require("../Middleware/file-upload");
const checkAuth = require("../Middleware/check-auth");
router.get("/:placeid", placescontrollers.getplacebyid);
router.get("/user/:userid", placescontrollers.getplacesbyuserId);
router.use(checkAuth);
router.post(
  "/",
  fileupload.single("image"),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placescontrollers.createPlace
);
router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placescontrollers.updatePlace
);
router.delete("/:pid", placescontrollers.deletePlace);
module.exports = router;
