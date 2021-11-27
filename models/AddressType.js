const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AddressType', {
    AddressTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Unique nonclustered index. Use"
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'AddressType',
    schema: 'Person',
    timestamps: false,
    indexes: [
      {
        name: "AK_AddressType_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "AK_AddressType_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_AddressType_AddressTypeID",
        unique: true,
        fields: [
          { name: "AddressTypeID" },
        ]
      },
    ]
  });
};
