const fs = require("fs");
const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
// const getCoordForAddress = require("../util/location");
const getCoordinates = require("../util/location");
const cloudinary = require("cloudinary");
const Place = require("../models/place");
const User = require("../models/user");
const mongoose = require("mongoose");

const getplacebyid = async (req, res, next) => {
  const Placeid = req.params.placeid;
  let place;
  try {
    place = await Place.findById(Placeid);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a place",
      500
    );
    return next(error);
  }
  if (!place) {
    const error = new HttpError(
      "could not find a place for the provided id.",
      404
    );
    return next(error);
  }
  res.json({ place: place.toObject({ getters: true }) });
};
const getplacesbyuserId = async (req, res, next) => {
  const Userid = req.params.userid;
  let places;
  try {
    places = await Place.find({ creator: Userid });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a place",
      500
    );
    return next(error);
  }
  if (!places || places.length === 0) {
    return next(
      new HttpError("could not find a place for the provided user id.", 404)
    );
  }
  res.json({
    places: places.map((place) => place.toObject({ getters: true })),
  });
};
const createPlace = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(422);
    next(new HttpError("invalid inputs passed,please check your inputs", 422));
  }
  const { title, description, address } = req.body;
  let coordinates;
  try {
    coordinates = await getCoordinates(address);
  } catch (error) {
    return next(error);
  }
  if (!coordinates) {
    coordinates = { lat: 0, lon: 0 };
  }
  // const result = await cloudinary.v2.uploader.upload(image, {
  //   folder: "myclicks",
  //   width: 150,
  //   crop: "scale",
  // });
  // const newimage = {
  //   public_id: result.public_id,
  //   url: result.secure_url,
  // };
  const createdPlace = new Place({
    title,
    description,
    image: req.file.path,
    address,
    location: coordinates,
    creator: req.userData.userId,
  });

  let user;
  try {
    user = await User.findById(req.userData.userId);
  } catch (err) {
    const error = new HttpError("Creating Place failed,please try again", 500);
    return next(error);
  }
  if (!user) {
    const error = new HttpError("could not find user for provided id", 404);
    return next(error);
  }
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPlace.save({ Session: sess });
    user.places.push(createdPlace);
    await user.save({ Session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Creating Place failed", 500);
    return next(error);
  }
  res.status(201).json({ place: createdPlace });
};
const updatePlace = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(422);
    return next(
      new HttpError("invalid inputs passed,please check your inputs", 422)
    );
  }
  const { title, description } = req.body;
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      "something went wrong ,could not update place",
      500
    );
    return next(error);
  }
  if (place.creator.toString() !== req.userData.userId) {
    const error = new HttpError("you are not allowed to edit this place.", 401);
    return next(error);
  }
  place.title = title;
  place.description = description;
  try {
    await place.save();
  } catch (err) {
    const error = new HttpError(
      "something went wrong ,could not update place",
      500
    );
    return next(error);
  }
  res.status(201).json({ place: place.toObject({ getters: true }) });
};
const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId).populate("creator");
  } catch (err) {
    const error = new HttpError(
      "something went wrong,could not delete place",
      500
    );
    return next(error);
  }
  if (!place) {
    const error = new HttpError("could not find place for this id.", 404);
    return next(error);
  }
  if (place.creator.id !== req.userData.userId) {
    const error = new HttpError(
      "you are not allowed to delete this place.",
      401
    );
    return next(error);
  }
  // const imagepath = place.image;
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.remove({ Session: sess });
    place.creator.places.pull(place);
    await place.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "something went wrong,could not delete place",
      500
    );
    return next(error);
  }
  // fs.unlink(imagepath, (err) => {
  //   console.log(err);
  // });
  res.status(200).json({ message: "place deleted successfully" });
};

exports.getplacebyid = getplacebyid;
exports.getplacesbyuserId = getplacesbyuserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
