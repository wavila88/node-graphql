const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeDepartmentHistory', {
    BusinessEntityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'Employee',
        key: 'BusinessEntityID'
      }
    },
    DepartmentID: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      comment: "Nonclustered index.",
      references: {
        model: 'Department',
        key: 'DepartmentID'
      }
    },
    ShiftID: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      comment: "Nonclustered index.",
      references: {
        model: 'Shift',
        key: 'ShiftID'
      }
    },
    StartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      comment: "Date the employee started work"
    },
    EndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Date the employee left the dep"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'EmployeeDepartmentHistory',
    schema: 'HumanResources',
    timestamps: false,
    indexes: [
      {
        name: "IX_EmployeeDepartmentHistory_DepartmentID",
        fields: [
          { name: "DepartmentID" },
        ]
      },
      {
        name: "IX_EmployeeDepartmentHistory_ShiftID",
        fields: [
          { name: "ShiftID" },
        ]
      },
      {
        name: "PK_EmployeeDepartmentHistory_BusinessEntityID_StartDate_DepartmentID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
          { name: "StartDate" },
          { name: "DepartmentID" },
          { name: "ShiftID" },
        ]
      },
    ]
  });
};
