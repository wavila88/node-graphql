const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Person', {
    BusinessEntityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'BusinessEntity',
        key: 'BusinessEntityID'
      }
    },
    PersonType: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "Primary type of person: SC = S"
    },
    NameStyle: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "Unique nonclustered index. Use"
    },
    Title: {
      type: DataTypes.STRING(8),
      allowNull: true,
      comment: "A courtesy title. For example,"
    },
    FirstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "First name of the person."
    },
    MiddleName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Middle name or middle initial "
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Last name of the person."
    },
    Suffix: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "Surname suffix. For example, S"
    },
    EmailPromotion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 = Contact does not wish to r"
    },
    AdditionalContactInfo: {
      type: "XML",
      allowNull: true,
      comment: "Additional contact information"
    },
    Demographics: {
      type: "XML",
      allowNull: true,
      comment: "Personal information such as h"
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
    tableName: 'Person',
    schema: 'Person',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "AK_Person_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "IX_Person_LastName_FirstName_MiddleName",
        fields: [
          { name: "LastName" },
          { name: "FirstName" },
          { name: "MiddleName" },
        ]
      },
      {
        name: "PK_Person_BusinessEntityID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
        ]
      },
    ]
  });
};
