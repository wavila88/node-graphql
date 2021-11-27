const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductInventory', {
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'Product',
        key: 'ProductID'
      }
    },
    LocationID: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      comment: "Inventory location identificat",
      references: {
        model: 'Location',
        key: 'LocationID'
      }
    },
    Shelf: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "Storage compartment within an "
    },
    Bin: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "Storage container on a shelf i"
    },
    Quantity: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Quantity of products in the in"
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "ROWGUIDCOL number uniquely ide"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'ProductInventory',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProductInventory_ProductID_LocationID",
        unique: true,
        fields: [
          { name: "ProductID" },
          { name: "LocationID" },
        ]
      },
    ]
  });
};
