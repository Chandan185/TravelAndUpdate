const mongoose = require("mongoose");
const uniqueValidor = require("mongoose-unique-validator");
mongoose.set("strictQuery", false);
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: {
    type: String,
    required: true,
  },
  places: [{ type: mongoose.Types.ObjectId, required: true, ref: "Place" }],
});
userSchema.plugin(uniqueValidor);
module.exports = mongoose.model("User", userSchema);
