const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BusinessEntity', {
    BusinessEntityID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "Unique nonclustered index. Use"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'BusinessEntity',
    schema: 'Person',
    timestamps: false,
    indexes: [
      {
        name: "AK_BusinessEntity_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_BusinessEntity_BusinessEntityID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
        ]
      },
    ]
  });
};
