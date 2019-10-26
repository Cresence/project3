const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookhotelSchema = new Schema({
  owner_name: { type: String, required: true },
  pet_name: { type: String, required: true },
  select_pet: String,
  select_pet_size: String,
  select_date_from: String,
  select_date_to: String,
  date: { type: Date, default: Date.now },
  pet_count:  { type: Number},
  days: {type: Number},
  price: {type: Number},
  total_price: {type: Number},
  booking_status: String
});

const Bookhotel = mongoose.model("Bookhotel", bookhotelSchema);

module.exports = Bookhotel;
