const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BillOfMaterials', {
    BillOfMaterialsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index."
    },
    ProductAssemblyID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Nonclustered index created by ",
      references: {
        model: 'Product',
        key: 'ProductID'
      }
    },
    ComponentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nonclustered index.",
      references: {
        model: 'Product',
        key: 'ProductID'
      }
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date the component started bei"
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Date the component stopped bei"
    },
    UnitMeasureCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      comment: "Standard code identifying the ",
      references: {
        model: 'UnitMeasure',
        key: 'UnitMeasureCode'
      }
    },
    BOMLevel: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Indicates the depth the compon"
    },
    PerAssemblyQty: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 1.00,
      comment: "Quantity of the component need"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'BillOfMaterials',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "AK_BillOfMaterials_ProductAssemblyID_ComponentID_StartDate",
        unique: true,
        fields: [
          { name: "ProductAssemblyID" },
          { name: "ComponentID" },
          { name: "StartDate" },
        ]
      },
      {
        name: "IX_BillOfMaterials_UnitMeasureCode",
        fields: [
          { name: "UnitMeasureCode" },
        ]
      },
      {
        name: "PK_BillOfMaterials_BillOfMaterialsID",
        unique: true,
        fields: [
          { name: "BillOfMaterialsID" },
        ]
      },
    ]
  });
};
