const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesPerson', {
    BusinessEntityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'Employee',
        key: 'BusinessEntityID'
      }
    },
    TerritoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Unique nonclustered index. Use",
      references: {
        model: 'SalesTerritory',
        key: 'TerritoryID'
      }
    },
    SalesQuota: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true,
      comment: "Projected yearly sales."
    },
    Bonus: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Bonus due if quota is met."
    },
    CommissionPct: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Commision percent received per"
    },
    SalesYTD: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Sales total year to date."
    },
    SalesLastYear: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Sales total of previous year."
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
    tableName: 'SalesPerson',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "AK_SalesPerson_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_SalesPerson_BusinessEntityID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
        ]
      },
    ]
  });
};
