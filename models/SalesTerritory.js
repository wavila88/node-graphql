const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesTerritory', {
    TerritoryID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    CountryRegionCode: {
      type: DataTypes.STRING(3),
      allowNull: false,
      comment: "Unique nonclustered index. Use",
      references: {
        model: 'CountryRegion',
        key: 'CountryRegionCode'
      }
    },
    Group: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Geographic area to which the s"
    },
    SalesYTD: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Sales in the territory year to"
    },
    SalesLastYear: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Sales in the territory the pre"
    },
    CostYTD: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Business costs in the territor"
    },
    CostLastYear: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Business costs in the territor"
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
    tableName: 'SalesTerritory',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "AK_SalesTerritory_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "AK_SalesTerritory_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_SalesTerritory_TerritoryID",
        unique: true,
        fields: [
          { name: "TerritoryID" },
        ]
      },
    ]
  });
};
