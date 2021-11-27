const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WorkOrderRouting', {
    WorkOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'WorkOrder',
        key: 'WorkOrderID'
      }
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Nonclustered index."
    },
    OperationSequence: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      comment: "Primary key. Indicates the man"
    },
    LocationID: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Manufacturing location where t",
      references: {
        model: 'Location',
        key: 'LocationID'
      }
    },
    ScheduledStartDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Planned manufacturing start da"
    },
    ScheduledEndDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Planned manufacturing end date"
    },
    ActualStartDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Actual start date."
    },
    ActualEndDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Actual end date."
    },
    ActualResourceHrs: {
      type: DataTypes.DECIMAL(9,4),
      allowNull: true,
      comment: "Number of manufacturing hours "
    },
    PlannedCost: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Estimated manufacturing cost."
    },
    ActualCost: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true,
      comment: "Actual manufacturing cost."
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'WorkOrderRouting',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "IX_WorkOrderRouting_ProductID",
        fields: [
          { name: "ProductID" },
        ]
      },
      {
        name: "PK_WorkOrderRouting_WorkOrderID_ProductID_OperationSequence",
        unique: true,
        fields: [
          { name: "WorkOrderID" },
          { name: "ProductID" },
          { name: "OperationSequence" },
        ]
      },
    ]
  });
};
