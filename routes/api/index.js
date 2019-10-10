const router = require("express").Router();
const bookRoutes = require("./books");
const testimonialRoutes = require("./testimonials");
const postRoutes = require("./posts");
const bookhotelRoutes = require("./bookhotels");
// Book routes
router.use("/books", bookRoutes);

router.use("/testimonials", testimonialRoutes);

router.use("/posts", postRoutes);

router.use("/bookhotels", bookhotelRoutes);

module.exports = router;
