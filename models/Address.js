const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Address', {
    AddressID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    AddressLine1: {
      type: DataTypes.STRING(60),
      allowNull: false,
      comment: "Unique nonclustered index. Use"
    },
    AddressLine2: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: "Nonclustered index."
    },
    City: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "Nonclustered index."
    },
    StateProvinceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Unique identification number f",
      references: {
        model: 'StateProvince',
        key: 'StateProvinceID'
      }
    },
    PostalCode: {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "Postal code for the street add"
    },
    SpatialLocation: {
      type: DataTypes.GEOGRAPHY,
      allowNull: true,
      comment: "Latitude and longitude of this"
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
    tableName: 'Address',
    schema: 'Person',
    timestamps: false,
    indexes: [
      {
        name: "AK_Address_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "IX_Address_AddressLine1_AddressLine2_City_StateProvinceID_PostalCode",
        unique: true,
        fields: [
          { name: "AddressLine1" },
          { name: "AddressLine2" },
          { name: "City" },
          { name: "StateProvinceID" },
          { name: "PostalCode" },
        ]
      },
      {
        name: "IX_Address_StateProvinceID",
        fields: [
          { name: "StateProvinceID" },
        ]
      },
      {
        name: "PK_Address_AddressID",
        unique: true,
        fields: [
          { name: "AddressID" },
        ]
      },
    ]
  });
};
