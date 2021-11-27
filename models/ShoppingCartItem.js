const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShoppingCartItem', {
    ShoppingCartItemID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    ShoppingCartID: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Nonclustered index."
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "Product quantity ordered."
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Product ordered. Foreign key t",
      references: {
        model: 'Product',
        key: 'ProductID'
      }
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date the time the record was c"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'ShoppingCartItem',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "IX_ShoppingCartItem_ShoppingCartID_ProductID",
        fields: [
          { name: "ShoppingCartID" },
          { name: "ProductID" },
        ]
      },
      {
        name: "PK_ShoppingCartItem_ShoppingCartItemID",
        unique: true,
        fields: [
          { name: "ShoppingCartItemID" },
        ]
      },
    ]
  });
};
