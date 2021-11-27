const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CountryRegion', {
    CountryRegionCode: {
      type: DataTypes.STRING(3),
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
    tableName: 'CountryRegion',
    schema: 'Person',
    timestamps: false,
    indexes: [
      {
        name: "AK_CountryRegion_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "PK_CountryRegion_CountryRegionCode",
        unique: true,
        fields: [
          { name: "CountryRegionCode" },
        ]
      },
    ]
  });
};
