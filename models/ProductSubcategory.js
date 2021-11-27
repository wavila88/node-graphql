const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductSubcategory', {
    ProductSubcategoryID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    ProductCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Unique nonclustered index.",
      references: {
        model: 'ProductCategory',
        key: 'ProductCategoryID'
      }
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Unique nonclustered index. Use"
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
    tableName: 'ProductSubcategory',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "AK_ProductSubcategory_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "AK_ProductSubcategory_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_ProductSubcategory_ProductSubcategoryID",
        unique: true,
        fields: [
          { name: "ProductSubcategoryID" },
        ]
      },
    ]
  });
};