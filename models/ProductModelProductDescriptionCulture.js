const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductModelProductDescriptionCulture', {
    ProductModelID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'ProductModel',
        key: 'ProductModelID'
      }
    },
    ProductDescriptionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Primary key. Foreign key to Pr",
      references: {
        model: 'ProductDescription',
        key: 'ProductDescriptionID'
      }
    },
    CultureID: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true,
      comment: "Culture identification number.",
      references: {
        model: 'Culture',
        key: 'CultureID'
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
    tableName: 'ProductModelProductDescriptionCulture',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProductModelProductDescriptionCulture_ProductModelID_ProductDescriptionID_CultureID",
        unique: true,
        fields: [
          { name: "ProductModelID" },
          { name: "ProductDescriptionID" },
          { name: "CultureID" },
        ]
      },
    ]
  });
};
