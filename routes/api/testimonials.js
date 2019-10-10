const router = require("express").Router();
const testimonialsController = require("../../controllers/testimonialsController");

// Matches with "/api/books"
router.route("/")
  .get(testimonialsController.findAll)
  .post(testimonialsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(testimonialsController.findById)
  .put(testimonialsController.update)
  .delete(testimonialsController.remove);

module.exports = router;
