const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PurchaseOrderHeader', {
    PurchaseOrderID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    RevisionNumber: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Nonclustered index."
    },
    Status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Nonclustered index."
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Employee who created the purch",
      references: {
        model: 'Employee',
        key: 'BusinessEntityID'
      }
    },
    VendorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Vendor with whom the purchase ",
      references: {
        model: 'Vendor',
        key: 'BusinessEntityID'
      }
    },
    ShipMethodID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Shipping method. Foreign key t",
      references: {
        model: 'ShipMethod',
        key: 'ShipMethodID'
      }
    },
    OrderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Purchase order creation date."
    },
    ShipDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Estimated shipment date from t"
    },
    SubTotal: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Purchase order subtotal. Compu"
    },
    TaxAmt: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Tax amount."
    },
    Freight: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Shipping cost."
    },
    TotalDue: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Total due to vendor. Computed "
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'PurchaseOrderHeader',
    schema: 'Purchasing',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IX_PurchaseOrderHeader_EmployeeID",
        fields: [
          { name: "EmployeeID" },
        ]
      },
      {
        name: "IX_PurchaseOrderHeader_VendorID",
        fields: [
          { name: "VendorID" },
        ]
      },
      {
        name: "PK_PurchaseOrderHeader_PurchaseOrderID",
        unique: true,
        fields: [
          { name: "PurchaseOrderID" },
        ]
      },
    ]
  });
};
