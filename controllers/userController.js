const User = require("../models").User;
const bcrypt = require("bcryptjs");

const format = (user) => {
  const { id, name, email } = user;
  console.log(user);
  return {
    accessToken: user.generateToken(),
  };
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const cekUser = await User.findOne({
      where: {
        email: email,
      },
    });

    if (cekUser) {
      return res.status(400).json({
        status: "failed",
        message: "User sudah ada",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      status: "OK",
      result: user,
      errors: {},
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      errors: [error.message],
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(400).json({
        status: "failed",
        message: "wrong email/password!",
      });
    }
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        status: "failed",
        message: "wrong email/password!",
      });
    }

    return res.status(201).json({
      status: "OK",
      result: format(user),
      errors: {},
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  register,
  login,
};
