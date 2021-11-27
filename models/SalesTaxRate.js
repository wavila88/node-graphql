const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesTaxRate', {
    SalesTaxRateID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    StateProvinceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Unique nonclustered index.",
      references: {
        model: 'StateProvince',
        key: 'StateProvinceID'
      }
    },
    TaxType: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "Unique nonclustered index. Use"
    },
    TaxRate: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Tax rate amount."
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Tax rate description."
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
    tableName: 'SalesTaxRate',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "AK_SalesTaxRate_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "AK_SalesTaxRate_StateProvinceID_TaxType",
        unique: true,
        fields: [
          { name: "StateProvinceID" },
          { name: "TaxType" },
        ]
      },
      {
        name: "PK_SalesTaxRate_SalesTaxRateID",
        unique: true,
        fields: [
          { name: "SalesTaxRateID" },
        ]
      },
    ]
  });
};
