const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductModelIllustration', {
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
    IllustrationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Primary key. Foreign key to Il",
      references: {
        model: 'Illustration',
        key: 'IllustrationID'
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
    tableName: 'ProductModelIllustration',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProductModelIllustration_ProductModelID_IllustrationID",
        unique: true,
        fields: [
          { name: "ProductModelID" },
          { name: "IllustrationID" },
        ]
      },
    ]
  });
};
