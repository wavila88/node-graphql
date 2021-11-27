const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderHeader', {
    SalesOrderID: {
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
      comment: "Unique nonclustered index. Use"
    },
    OrderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Unique nonclustered index."
    },
    DueDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Nonclustered index."
    },
    ShipDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Nonclustered index."
    },
    Status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Order current status. 1 = In p"
    },
    OnlineOrderFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "0 = Order placed by sales pers"
    },
    SalesOrderNumber: {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "Unique sales order identificat"
    },
    PurchaseOrderNumber: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "Customer purchase order number"
    },
    AccountNumber: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "Financial accounting number re"
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Customer identification number",
      references: {
        model: 'Customer',
        key: 'CustomerID'
      }
    },
    SalesPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Sales person who created the s",
      references: {
        model: 'SalesPerson',
        key: 'BusinessEntityID'
      }
    },
    TerritoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Territory in which the sale wa",
      references: {
        model: 'SalesTerritory',
        key: 'TerritoryID'
      }
    },
    BillToAddressID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Customer billing address. Fore",
      references: {
        model: 'Address',
        key: 'AddressID'
      }
    },
    ShipToAddressID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Customer shipping address. For",
      references: {
        model: 'Address',
        key: 'AddressID'
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
    CreditCardID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Credit card identification num",
      references: {
        model: 'CreditCard',
        key: 'CreditCardID'
      }
    },
    CreditCardApprovalCode: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "Approval code provided by the "
    },
    CurrencyRateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Currency exchange rate used. F",
      references: {
        model: 'CurrencyRate',
        key: 'CurrencyRateID'
      }
    },
    SubTotal: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Sales subtotal. Computed as SU"
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
      comment: "Total due from customer. Compu"
    },
    Comment: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Sales representative comments."
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
    tableName: 'SalesOrderHeader',
    schema: 'Sales',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "AK_SalesOrderHeader_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "AK_SalesOrderHeader_SalesOrderNumber",
        unique: true,
        fields: [
          { name: "SalesOrderNumber" },
        ]
      },
      {
        name: "IX_SalesOrderHeader_CustomerID",
        fields: [
          { name: "CustomerID" },
        ]
      },
      {
        name: "IX_SalesOrderHeader_SalesPersonID",
        fields: [
          { name: "SalesPersonID" },
        ]
      },
      {
        name: "PK_SalesOrderHeader_SalesOrderID",
        unique: true,
        fields: [
          { name: "SalesOrderID" },
        ]
      },
    ]
  });
};
