var express = require("express");
var router = express.Router();
var test = require("../controllers/testController");
const auth = require("../middleware/auth");

router.get("/products", auth, test.test);
module.exports = router;
