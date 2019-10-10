const router = require("express").Router();
const bookhotelsController = require("../../controllers/bookhotelsController");

// Matches with "/api/books"
router.route("/")
  .get(bookhotelsController.findAll)
  .post(bookhotelsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookhotelsController.findById)
  .put(bookhotelsController.update)
  .delete(bookhotelsController.remove);

module.exports = router;
