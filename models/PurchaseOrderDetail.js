const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PurchaseOrderDetail', {
    PurchaseOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'PurchaseOrderHeader',
        key: 'PurchaseOrderID'
      }
    },
    PurchaseOrderDetailID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Nonclustered index."
    },
    DueDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Date the product is expected t"
    },
    OrderQty: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Quantity ordered."
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Product identification number.",
      references: {
        model: 'Product',
        key: 'ProductID'
      }
    },
    UnitPrice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Vendor's selling price of a si"
    },
    LineTotal: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Per product subtotal. Computed"
    },
    ReceivedQty: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      comment: "Quantity actually received fro"
    },
    RejectedQty: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      comment: "Quantity rejected during inspe"
    },
    StockedQty: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      comment: "Quantity accepted into invento"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'PurchaseOrderDetail',
    schema: 'Purchasing',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IX_PurchaseOrderDetail_ProductID",
        fields: [
          { name: "ProductID" },
        ]
      },
      {
        name: "PK_PurchaseOrderDetail_PurchaseOrderID_PurchaseOrderDetailID",
        unique: true,
        fields: [
          { name: "PurchaseOrderID" },
          { name: "PurchaseOrderDetailID" },
        ]
      },
    ]
  });
};
