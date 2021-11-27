const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShipMethod', {
    ShipMethodID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    ShipBase: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Unique nonclustered index. Use"
    },
    ShipRate: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Shipping charge per pound."
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
    tableName: 'ShipMethod',
    schema: 'Purchasing',
    timestamps: false,
    indexes: [
      {
        name: "AK_ShipMethod_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "AK_ShipMethod_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_ShipMethod_ShipMethodID",
        unique: true,
        fields: [
          { name: "ShipMethodID" },
        ]
      },
    ]
  });
};
