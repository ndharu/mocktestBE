var express = require("express");
var router = express.Router();
const item = require("../controllers/itemController");
const auth = require("../middleware/auth");

router.get("/products", auth, item.getAllItem);
router.get("/products/:id", auth, item.getOneItem);
router.post("/products/", auth, item.createData);
router.put("/products/:id", auth, item.updateData);
router.delete("/products/:id", auth, item.deleteData);
module.exports = router;
