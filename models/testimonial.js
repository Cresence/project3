const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testimonialSchema = new Schema({
  person_name: { type: String, required: true },
  address: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
