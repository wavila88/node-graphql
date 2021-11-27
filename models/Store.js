const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Store', {
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
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Unique nonclustered index. Use"
    },
    SalesPersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Nonclustered index.",
      references: {
        model: 'SalesPerson',
        key: 'BusinessEntityID'
      }
    },
    Demographics: {
      type: "XML",
      allowNull: true,
      comment: "Demographic informationg about"
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
    tableName: 'Store',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "AK_Store_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "IX_Store_SalesPersonID",
        fields: [
          { name: "SalesPersonID" },
        ]
      },
      {
        name: "PK_Store_BusinessEntityID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
        ]
      },
    ]
  });
};
