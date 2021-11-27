const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderDetail', {
    SalesOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'SalesOrderHeader',
        key: 'SalesOrderID'
      }
    },
    SalesOrderDetailID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Unique nonclustered index. Use"
    },
    CarrierTrackingNumber: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "Nonclustered index."
    },
    OrderQty: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Quantity ordered per product."
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Product sold to customer. Fore",
      references: {
        model: 'SpecialOfferProduct',
        key: 'SpecialOfferID'
      }
    },
    SpecialOfferID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Promotional code. Foreign key ",
      references: {
        model: 'SpecialOfferProduct',
        key: 'SpecialOfferID'
      }
    },
    UnitPrice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Selling price of a single prod"
    },
    UnitPriceDiscount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.0,
      comment: "Discount amount."
    },
    LineTotal: {
      type: DataTypes.DECIMAL(38,6),
      allowNull: false,
      comment: "Per product subtotal. Computed"
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
    tableName: 'SalesOrderDetail',
    schema: 'Sales',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "AK_SalesOrderDetail_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "IX_SalesOrderDetail_ProductID",
        fields: [
          { name: "ProductID" },
        ]
      },
      {
        name: "PK_SalesOrderDetail_SalesOrderID_SalesOrderDetailID",
        unique: true,
        fields: [
          { name: "SalesOrderID" },
          { name: "SalesOrderDetailID" },
        ]
      },
    ]
  });
};
