const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductListPriceHistory', {
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
      comment: "List price start date."
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "List price end date"
    },
    ListPrice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Product list price."
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'ProductListPriceHistory',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProductListPriceHistory_ProductID_StartDate",
        unique: true,
        fields: [
          { name: "ProductID" },
          { name: "StartDate" },
        ]
      },
    ]
  });
};
