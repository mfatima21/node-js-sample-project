const express =  require("express");
const MovieRoutes = require("./posts.routes");
const CastRoutes = require("./cast.routes");
const UserRoutes = require("./user.routes");
const router = express.Router();
const authRoutes = require("./auth.routes");
/**
 * GET /heatlh-check - Check health service
 */

router.get("/health-check", (req, res) => {
    return res.send("OK");
});


router.use("/movies", MovieRoutes);
router.use("/cast", CastRoutes);
router.use("/user", UserRoutes);
router.use("/login", authRoutes);

module.exports = router;
