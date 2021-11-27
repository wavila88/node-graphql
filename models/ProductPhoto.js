const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductPhoto', {
    ProductPhotoID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    ThumbNailPhoto: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "Small image of the product."
    },
    ThumbnailPhotoFileName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Small image file name."
    },
    LargePhoto: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "Large image of the product."
    },
    LargePhotoFileName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Large image file name."
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'ProductPhoto',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProductPhoto_ProductPhotoID",
        unique: true,
        fields: [
          { name: "ProductPhotoID" },
        ]
      },
    ]
  });
};
