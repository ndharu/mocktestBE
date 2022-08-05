"use strict";
const { Model } = require("sequelize");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    generateToken = () => {
      const payload = {
        id: this.id,
        email: this.email,
        username: this.username,
      };
      const mysecret = "secret";
      const token = jwt.sign(payload, mysecret, { expiresIn: "1d" });
      return token;
    };
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (instance) => {
          const salt = bcrypt.genSaltSync(10);
          instance.password = bcrypt.hashSync(instance.password, salt);
        },
      },
    }
  );
  return User;
};
