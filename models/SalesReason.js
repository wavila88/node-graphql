const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesReason', {
    SalesReasonID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Sales reason description."
    },
    ReasonType: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Category the sales reason belo"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'SalesReason',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "PK_SalesReason_SalesReasonID",
        unique: true,
        fields: [
          { name: "SalesReasonID" },
        ]
      },
    ]
  });
};
