const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductVendor', {
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
    BusinessEntityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Nonclustered index.",
      references: {
        model: 'Vendor',
        key: 'BusinessEntityID'
      }
    },
    AverageLeadTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nonclustered index."
    },
    StandardPrice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "The vendor's usual selling pri"
    },
    LastReceiptCost: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true,
      comment: "The selling price when last pu"
    },
    LastReceiptDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Date the product was last rece"
    },
    MinOrderQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "The maximum quantity that shou"
    },
    MaxOrderQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "The minimum quantity that shou"
    },
    OnOrderQty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "The quantity currently on orde"
    },
    UnitMeasureCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      comment: "The product's unit of measure.",
      references: {
        model: 'UnitMeasure',
        key: 'UnitMeasureCode'
      }
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'ProductVendor',
    schema: 'Purchasing',
    timestamps: false,
    indexes: [
      {
        name: "IX_ProductVendor_BusinessEntityID",
        fields: [
          { name: "BusinessEntityID" },
        ]
      },
      {
        name: "IX_ProductVendor_UnitMeasureCode",
        fields: [
          { name: "UnitMeasureCode" },
        ]
      },
      {
        name: "PK_ProductVendor_ProductID_BusinessEntityID",
        unique: true,
        fields: [
          { name: "ProductID" },
          { name: "BusinessEntityID" },
        ]
      },
    ]
  });
};
