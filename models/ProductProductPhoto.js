const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductProductPhoto', {
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Product identification number.",
      references: {
        model: 'Product',
        key: 'ProductID'
      }
    },
    ProductPhotoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Nonclustered index created by ",
      references: {
        model: 'ProductPhoto',
        key: 'ProductPhotoID'
      }
    },
    Primary: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "0 = Photo is not the principal"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'ProductProductPhoto',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProductProductPhoto_ProductID_ProductPhotoID",
        unique: true,
        fields: [
          { name: "ProductID" },
          { name: "ProductPhotoID" },
        ]
      },
    ]
  });
};
