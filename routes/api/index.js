const router = require("express").Router();
const bookRoutes = require("./books");
const testimonialRoutes = require("./testimonials");

// Book routes
router.use("/books", bookRoutes);

router.use("/testimonials", testimonialRoutes);

module.exports = router;
