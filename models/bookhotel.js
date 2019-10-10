const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookhotelSchema = new Schema({
  owner_name: { type: String, required: true },
  pet_name: { type: String, required: true },
  select_pet: String,
  select_pet_size: String,
  select_date_to: String,
  select_date_from: String,
  date: { type: Date, default: Date.now }
});

const Bookhotel = mongoose.model("Bookhotel", bookhotelSchema);

module.exports = Bookhotel;
