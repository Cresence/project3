const router = require("express").Router();
const testimonialRoutes = require("./testimonials");
const postRoutes = require("./posts");
const bookhotelRoutes = require("./bookhotels");

router.use("/testimonials", testimonialRoutes);

router.use("/posts", postRoutes);

router.use("/bookhotels", bookhotelRoutes);

module.exports = router;
