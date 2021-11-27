const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customer', {
    CustomerID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    PersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Unique nonclustered index. Use",
      references: {
        model: 'Person',
        key: 'BusinessEntityID'
      }
    },
    StoreID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Unique nonclustered index.",
      references: {
        model: 'Store',
        key: 'BusinessEntityID'
      }
    },
    TerritoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Nonclustered index.",
      references: {
        model: 'SalesTerritory',
        key: 'TerritoryID'
      }
    },
    AccountNumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "Unique number identifying the "
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
    tableName: 'Customer',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "AK_Customer_AccountNumber",
        unique: true,
        fields: [
          { name: "AccountNumber" },
        ]
      },
      {
        name: "AK_Customer_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "IX_Customer_TerritoryID",
        fields: [
          { name: "TerritoryID" },
        ]
      },
      {
        name: "PK_Customer_CustomerID",
        unique: true,
        fields: [
          { name: "CustomerID" },
        ]
      },
    ]
  });
};
