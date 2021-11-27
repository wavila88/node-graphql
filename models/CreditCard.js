const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CreditCard', {
    CreditCardID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    CardType: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    CardNumber: {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "Credit card number."
    },
    ExpMonth: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "Credit card expiration month."
    },
    ExpYear: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Credit card expiration year."
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'CreditCard',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "AK_CreditCard_CardNumber",
        unique: true,
        fields: [
          { name: "CardNumber" },
        ]
      },
      {
        name: "PK_CreditCard_CreditCardID",
        unique: true,
        fields: [
          { name: "CreditCardID" },
        ]
      },
    ]
  });
};
