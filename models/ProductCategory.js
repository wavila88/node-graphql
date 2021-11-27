const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductCategory', {
    ProductCategoryID: {
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
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "Unique nonclustered index. Use"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'ProductCategory',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "AK_ProductCategory_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "AK_ProductCategory_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_ProductCategory_ProductCategoryID",
        unique: true,
        fields: [
          { name: "ProductCategoryID" },
        ]
      },
    ]
  });
};
