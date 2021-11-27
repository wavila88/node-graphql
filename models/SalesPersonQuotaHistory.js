const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesPersonQuotaHistory', {
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
    QuotaDate: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
      comment: "Unique nonclustered index. Use"
    },
    SalesQuota: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Sales quota amount."
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
    tableName: 'SalesPersonQuotaHistory',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "AK_SalesPersonQuotaHistory_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_SalesPersonQuotaHistory_BusinessEntityID_QuotaDate",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
          { name: "QuotaDate" },
        ]
      },
    ]
  });
};
