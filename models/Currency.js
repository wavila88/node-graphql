const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Currency', {
    CurrencyCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'Currency',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "AK_Currency_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "PK_Currency_CurrencyCode",
        unique: true,
        fields: [
          { name: "CurrencyCode" },
        ]
      },
    ]
  });
};
