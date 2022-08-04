const express =  require("express");
const MovieRoutes = require("./posts");

const router = express.Router();

/**
 * GET /heatlh-check - Check health service
 */

router.get("/health-check", (req, res) => {
    return res.send("OK");
});


router.use("/", MovieRoutes);

module.exports = router;