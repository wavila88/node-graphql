const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductCostHistory', {
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
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
      comment: "Product cost start date."
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Product cost end date."
    },
    StandardCost: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Standard cost of the product."
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'ProductCostHistory',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProductCostHistory_ProductID_StartDate",
        unique: true,
        fields: [
          { name: "ProductID" },
          { name: "StartDate" },
        ]
      },
    ]
  });
};
