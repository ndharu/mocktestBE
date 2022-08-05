var express = require("express");
var router = express.Router();
const user = require("../controllers/userController");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/signup", user.register);
router.post("/login", user.login);

module.exports = router;
