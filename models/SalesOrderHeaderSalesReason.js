const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderHeaderSalesReason', {
    SalesOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'SalesOrderHeader',
        key: 'SalesOrderID'
      }
    },
    SalesReasonID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Primary key. Foreign key to Sa",
      references: {
        model: 'SalesReason',
        key: 'SalesReasonID'
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
    tableName: 'SalesOrderHeaderSalesReason',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "PK_SalesOrderHeaderSalesReason_SalesOrderID_SalesReasonID",
        unique: true,
        fields: [
          { name: "SalesOrderID" },
          { name: "SalesReasonID" },
        ]
      },
    ]
  });
};
