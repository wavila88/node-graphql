const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BusinessEntityAddress', {
    BusinessEntityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'BusinessEntity',
        key: 'BusinessEntityID'
      }
    },
    AddressID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Unique nonclustered index. Use",
      references: {
        model: 'Address',
        key: 'AddressID'
      }
    },
    AddressTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Nonclustered index.",
      references: {
        model: 'AddressType',
        key: 'AddressTypeID'
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
    tableName: 'BusinessEntityAddress',
    schema: 'Person',
    timestamps: false,
    indexes: [
      {
        name: "AK_BusinessEntityAddress_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "IX_BusinessEntityAddress_AddressID",
        fields: [
          { name: "AddressID" },
        ]
      },
      {
        name: "IX_BusinessEntityAddress_AddressTypeID",
        fields: [
          { name: "AddressTypeID" },
        ]
      },
      {
        name: "PK_BusinessEntityAddress_BusinessEntityID_AddressID_AddressTypeID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
          { name: "AddressID" },
          { name: "AddressTypeID" },
        ]
      },
    ]
  });
};
