"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Items", [
      {
        name: "Giant Reign",
        price: 2560,
        imageURL:
          "http://www.sepedacycleshop.com/image-product/img2033-1368243649.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Santa Cruz Nomad",
        price: 7510,
        imageURL:
          "https://www.santacruzbicycles.com/files/frame-thumbs/my18_nomad_xx1_rsv30_tan.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yeti SB5",
        price: 8715,
        imageURL: "https://ep1.pinkbike.org/p5pb11178439/p5pb11178439.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
