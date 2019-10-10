const router = require("express").Router();
const bookRoutes = require("./books");
const testimonialRoutes = require("./testimonials");
const postRoutes = require("./posts");
// Book routes
router.use("/books", bookRoutes);

router.use("/testimonials", testimonialRoutes);

router.use("/posts", postRoutes);

module.exports = router;
