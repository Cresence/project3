const router = require("express").Router();
const testimonialRoutes = require("./testimonials");
const postRoutes = require("./posts");
const bookhotelRoutes = require("./bookhotels");
const imageRoutes = require('./image')

router.use("/testimonials", testimonialRoutes);

router.use("/posts", postRoutes);

router.use("/bookhotels", bookhotelRoutes);

router.use("/images", imageRoutes);

module.exports = router;
