const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductDescription', {
    ProductDescriptionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    Description: {
      type: DataTypes.STRING(400),
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
    tableName: 'ProductDescription',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "AK_ProductDescription_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_ProductDescription_ProductDescriptionID",
        unique: true,
        fields: [
          { name: "ProductDescriptionID" },
        ]
      },
    ]
  });
};
