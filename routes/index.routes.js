const express =  require("express");
const MovieRoutes = require("./posts.routes");
const CastRoutes = require("./cast.routes");

const router = express.Router();

/**
 * GET /heatlh-check - Check health service
 */

router.get("/health-check", (req, res) => {
    return res.send("OK");
});


router.use("/movies", MovieRoutes);
router.use("/cast", CastRoutes);

module.exports = router;