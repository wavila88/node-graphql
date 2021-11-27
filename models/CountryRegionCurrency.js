const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CountryRegionCurrency', {
    CountryRegionCode: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'CountryRegion',
        key: 'CountryRegionCode'
      }
    },
    CurrencyCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true,
      comment: "Nonclustered index.",
      references: {
        model: 'Currency',
        key: 'CurrencyCode'
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
    tableName: 'CountryRegionCurrency',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "IX_CountryRegionCurrency_CurrencyCode",
        fields: [
          { name: "CurrencyCode" },
        ]
      },
      {
        name: "PK_CountryRegionCurrency_CountryRegionCode_CurrencyCode",
        unique: true,
        fields: [
          { name: "CountryRegionCode" },
          { name: "CurrencyCode" },
        ]
      },
    ]
  });
};
