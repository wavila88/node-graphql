const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SpecialOfferProduct', {
    SpecialOfferID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'SpecialOffer',
        key: 'SpecialOfferID'
      }
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Unique nonclustered index. Use",
      references: {
        model: 'Product',
        key: 'ProductID'
      }
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "Nonclustered index."
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'SpecialOfferProduct',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "AK_SpecialOfferProduct_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "IX_SpecialOfferProduct_ProductID",
        fields: [
          { name: "ProductID" },
        ]
      },
      {
        name: "PK_SpecialOfferProduct_SpecialOfferID_ProductID",
        unique: true,
        fields: [
          { name: "SpecialOfferID" },
          { name: "ProductID" },
        ]
      },
    ]
  });
};
