const {sequelize} = require('sequelize');
const {Address} = require('../../models');

const Query = {
  getAddressData : async () => {
    try {
      console.log(Address);
      const addresses = await Address.findAll();
      return addresses;
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = {Query};