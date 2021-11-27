const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductDocument', {
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'Product',
        key: 'ProductID'
      }
    },
    DocumentNode: {
      type: "HIERARCHYID",
      allowNull: false,
      primaryKey: true,
      comment: "Document identification number",
      references: {
        model: 'Document',
        key: 'DocumentNode'
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
    tableName: 'ProductDocument',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProductDocument_ProductID_DocumentNode",
        unique: true,
        fields: [
          { name: "ProductID" },
          { name: "DocumentNode" },
        ]
      },
    ]
  });
};
