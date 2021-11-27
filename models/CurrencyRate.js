const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CurrencyRate', {
    CurrencyRateID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    CurrencyRateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    FromCurrencyCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      comment: "Exchange rate was converted fr",
      references: {
        model: 'Currency',
        key: 'CurrencyCode'
      }
    },
    ToCurrencyCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      comment: "Exchange rate was converted to",
      references: {
        model: 'Currency',
        key: 'CurrencyCode'
      }
    },
    AverageRate: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Average exchange rate for the "
    },
    EndOfDayRate: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Final exchange rate for the da"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'CurrencyRate',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "AK_CurrencyRate_CurrencyRateDate_FromCurrencyCode_ToCurrencyCode",
        unique: true,
        fields: [
          { name: "CurrencyRateDate" },
          { name: "FromCurrencyCode" },
          { name: "ToCurrencyCode" },
        ]
      },
      {
        name: "PK_CurrencyRate_CurrencyRateID",
        unique: true,
        fields: [
          { name: "CurrencyRateID" },
        ]
      },
    ]
  });
};
