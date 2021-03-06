const router = require("express").Router();
const gameController = require("../controllers/gameController");


router.route("/")
    .get(gameController.listAll)
    .post(gameController.create);

router.route("/:id")
    .get(gameController.findById)
    .put(gameController.update)

module.exports = router;