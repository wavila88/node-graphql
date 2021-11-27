const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonCreditCard', {
    BusinessEntityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'Person',
        key: 'BusinessEntityID'
      }
    },
    CreditCardID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Credit card identification num",
      references: {
        model: 'CreditCard',
        key: 'CreditCardID'
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
    tableName: 'PersonCreditCard',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "PK_PersonCreditCard_BusinessEntityID_CreditCardID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
          { name: "CreditCardID" },
        ]
      },
    ]
  });
};
