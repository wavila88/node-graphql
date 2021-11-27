const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmailAddress', {
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
    EmailAddressID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Nonclustered index."
    },
    EmailAddress: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "E-mail address for the person."
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
    tableName: 'EmailAddress',
    schema: 'Person',
    timestamps: false,
    indexes: [
      {
        name: "IX_EmailAddress_EmailAddress",
        fields: [
          { name: "EmailAddress" },
        ]
      },
      {
        name: "PK_EmailAddress_BusinessEntityID_EmailAddressID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
          { name: "EmailAddressID" },
        ]
      },
    ]
  });
};
