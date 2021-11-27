const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductModel', {
    ProductModelID: {
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
    CatalogDescription: {
      type: "XML",
      allowNull: true,
      comment: "Unique nonclustered index. Use"
    },
    Instructions: {
      type: "XML",
      allowNull: true,
      comment: "Manufacturing instructions in "
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
    tableName: 'ProductModel',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "AK_ProductModel_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "AK_ProductModel_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_ProductModel_ProductModelID",
        unique: true,
        fields: [
          { name: "ProductModelID" },
        ]
      },
    ]
  });
};
