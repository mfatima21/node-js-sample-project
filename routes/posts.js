const express=require('express');
const router=express.Router();
const MovieController = require("../controllers/movie.controller")


//   router.route("/").post(MovieController.post);
// console.log(MovieController)
router.post('/', MovieController.post);
router.get('/', MovieController.get);

// router.route("/:productId").get(userView.getAll);
// router.route("/:productId/uniqueViews").get(userView.getAllUniqueViews);

module.exports = router;
