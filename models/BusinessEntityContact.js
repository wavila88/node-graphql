const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BusinessEntityContact', {
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
    PersonID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Unique nonclustered index. Use",
      references: {
        model: 'Person',
        key: 'BusinessEntityID'
      }
    },
    ContactTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Nonclustered index.",
      references: {
        model: 'ContactType',
        key: 'ContactTypeID'
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
    tableName: 'BusinessEntityContact',
    schema: 'Person',
    timestamps: false,
    indexes: [
      {
        name: "AK_BusinessEntityContact_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "IX_BusinessEntityContact_ContactTypeID",
        fields: [
          { name: "ContactTypeID" },
        ]
      },
      {
        name: "IX_BusinessEntityContact_PersonID",
        fields: [
          { name: "PersonID" },
        ]
      },
      {
        name: "PK_BusinessEntityContact_BusinessEntityID_PersonID_ContactTypeID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
          { name: "PersonID" },
          { name: "ContactTypeID" },
        ]
      },
    ]
  });
};
