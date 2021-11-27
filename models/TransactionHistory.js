const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TransactionHistory', {
    TransactionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nonclustered index.",
      references: {
        model: 'Product',
        key: 'ProductID'
      }
    },
    ReferenceOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nonclustered index."
    },
    ReferenceOrderLineID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Line number associated with th"
    },
    TransactionDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time of the transacti"
    },
    TransactionType: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: "W = WorkOrder, S = SalesOrder,"
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Product quantity."
    },
    ActualCost: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Product cost."
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'TransactionHistory',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "IX_TransactionHistory_ProductID",
        fields: [
          { name: "ProductID" },
        ]
      },
      {
        name: "IX_TransactionHistory_ReferenceOrderID_ReferenceOrderLineID",
        fields: [
          { name: "ReferenceOrderID" },
          { name: "ReferenceOrderLineID" },
        ]
      },
      {
        name: "PK_TransactionHistory_TransactionID",
        unique: true,
        fields: [
          { name: "TransactionID" },
        ]
      },
    ]
  });
};
