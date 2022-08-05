const jwt = require("jsonwebtoken");
const User = require("../models").User;

module.exports = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    let payload = await jwt.verify(token, "secret");
    req.user = await User.findByPk(payload.id);
    next();
  } catch (error) {
    return res.status(500).json("unauthorized");
  }
};
