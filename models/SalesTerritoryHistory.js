const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesTerritoryHistory', {
    BusinessEntityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'SalesPerson',
        key: 'BusinessEntityID'
      }
    },
    TerritoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Unique nonclustered index. Use",
      references: {
        model: 'SalesTerritory',
        key: 'TerritoryID'
      }
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
      comment: "Primary key. Date the sales re"
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Date the sales representative "
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
    tableName: 'SalesTerritoryHistory',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "AK_SalesTerritoryHistory_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_SalesTerritoryHistory_BusinessEntityID_StartDate_TerritoryID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
          { name: "StartDate" },
          { name: "TerritoryID" },
        ]
      },
    ]
  });
};
