const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StateProvince', {
    StateProvinceID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    StateProvinceCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    CountryRegionCode: {
      type: DataTypes.STRING(3),
      allowNull: false,
      comment: "Unique nonclustered index.",
      references: {
        model: 'CountryRegion',
        key: 'CountryRegionCode'
      }
    },
    IsOnlyStateProvinceFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "Unique nonclustered index. Use"
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "State or province description."
    },
    TerritoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ID of the territory in which t",
      references: {
        model: 'SalesTerritory',
        key: 'TerritoryID'
      }
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
    tableName: 'StateProvince',
    schema: 'Person',
    timestamps: false,
    indexes: [
      {
        name: "AK_StateProvince_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "AK_StateProvince_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "AK_StateProvince_StateProvinceCode_CountryRegionCode",
        unique: true,
        fields: [
          { name: "StateProvinceCode" },
          { name: "CountryRegionCode" },
        ]
      },
      {
        name: "PK_StateProvince_StateProvinceID",
        unique: true,
        fields: [
          { name: "StateProvinceID" },
        ]
      },
    ]
  });
};
