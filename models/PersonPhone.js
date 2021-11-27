const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersonPhone', {
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
    PhoneNumber: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true,
      comment: "Nonclustered index."
    },
    PhoneNumberTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Kind of phone number. Foreign ",
      references: {
        model: 'PhoneNumberType',
        key: 'PhoneNumberTypeID'
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
    tableName: 'PersonPhone',
    schema: 'Person',
    timestamps: false,
    indexes: [
      {
        name: "IX_PersonPhone_PhoneNumber",
        fields: [
          { name: "PhoneNumber" },
        ]
      },
      {
        name: "PK_PersonPhone_BusinessEntityID_PhoneNumber_PhoneNumberTypeID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
          { name: "PhoneNumber" },
          { name: "PhoneNumberTypeID" },
        ]
      },
    ]
  });
};
