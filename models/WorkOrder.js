const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WorkOrder', {
    WorkOrderID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nonclustered index.",
      references: {
        model: 'Product',
        key: 'ProductID'
      }
    },
    OrderQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nonclustered index."
    },
    StockedQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Quantity built and put in inve"
    },
    ScrappedQty: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Quantity that failed inspectio"
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Work order start date."
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Work order end date."
    },
    DueDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Work order due date."
    },
    ScrapReasonID: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Reason for inspection failure.",
      references: {
        model: 'ScrapReason',
        key: 'ScrapReasonID'
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
    tableName: 'WorkOrder',
    schema: 'Production',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IX_WorkOrder_ProductID",
        fields: [
          { name: "ProductID" },
        ]
      },
      {
        name: "IX_WorkOrder_ScrapReasonID",
        fields: [
          { name: "ScrapReasonID" },
        ]
      },
      {
        name: "PK_WorkOrder_WorkOrderID",
        unique: true,
        fields: [
          { name: "WorkOrderID" },
        ]
      },
    ]
  });
};
