const express =  require("express");
const MovieRoutes = require("./posts.routes");
const CastRoutes = require("./cast.routes");
const UserRoutes = require("./user.routes");
const router = express.Router();
const authRoutes = require("./auth.routes");
const {validateToken, authorization} = require("../services/auth.service");

/**
 * GET /heatlh-check - Check health service
 */

router.get("/health-check", (req, res) => {
    return res.send("OK");
});

router.use("/movies",validateToken, MovieRoutes);
router.use("/cast", validateToken, CastRoutes);
router.use("/user", validateToken,authorization, UserRoutes);
router.use("/login", authRoutes);

module.exports = router;
