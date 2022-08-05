const Item = require("../models").Item;

const getAllItem = (req, res) => {
  const data = Item.findAll()
    .then((data) => {
      res.status(200).json({
        status: "OK",
        result: data,
        error: {},
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: "failed",
        error: [error.message],
      });
    });
};

const getOneItem = (req, res) => {
  const id = req.params.id;
  const data = Item.findAll({
    where: {
      id: id,
    },
  })
    .then((data) => {
      res.status(200).json({
        status: "OK",
        result: data,
        error: {},
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: "failed",
        error: [error.message],
      });
    });
};

const createData = async (req, res) => {
  const { name, price, imageURL } = req.body;
  try {
    const item = await Item.create({
      name,
      price,
      imageURL,
    });
    return res.status(200).json({
      status: "OK",
      result: item,
      errors: {},
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      errors: [error.message],
    });
  }
};

const updateData = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, price, imageURL } = req.body;
    const data = await Item.update(
      {
        name,
        price,
        imageURL,
      },
      {
        where: {
          id: id,
        },
      }
    );
    const result = await Item.findAll({
      where: {
        id: id,
      },
    });

    return res.status(200).json({
      status: "OK",
      result: result,
      errors: {},
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      errors: [error.message],
    });
  }
};

const deleteData = async (req, res) => {
  try {
    const item = await Item.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!item) {
      return res.status(400).json({
        status: "failed",
        message: `item dengan id ${req.params.id} tidak ditemukan`,
      });
    } else {
      await Item.destroy({
        where: {
          id: req.params.id,
        },
        individualHooks: true,
      });
    }
    return res.status(200).json({
      status: "OK",
      result: `id ${req.params.id} deleted`,
      errors: {},
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      errors: [error.message],
    });
  }
};

module.exports = {
  getAllItem,
  getOneItem,
  createData,
  updateData,
  deleteData,
};
