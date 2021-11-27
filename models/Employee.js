const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employee', {
    BusinessEntityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'Person',
        key: 'BusinessEntityID'
      }
    },
    NationalIDNumber: {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    LoginID: {
      type: DataTypes.STRING(256),
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    OrganizationNode: {
      type: "HIERARCHYID",
      allowNull: true,
      comment: "Unique nonclustered index."
    },
    OrganizationLevel: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Unique nonclustered index."
    },
    JobTitle: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Unique nonclustered index. Use"
    },
    BirthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Date of birth."
    },
    MaritalStatus: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: "M = Married, S = Single"
    },
    Gender: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: "M = Male, F = Female"
    },
    HireDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Employee hired on this date."
    },
    SalariedFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "Job classification. 0 = Hourly"
    },
    VacationHours: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of available vacation h"
    },
    SickLeaveHours: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of available sick leave"
    },
    CurrentFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "0 = Inactive, 1 = Active"
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
    tableName: 'Employee',
    schema: 'HumanResources',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "AK_Employee_LoginID",
        unique: true,
        fields: [
          { name: "LoginID" },
        ]
      },
      {
        name: "AK_Employee_NationalIDNumber",
        unique: true,
        fields: [
          { name: "NationalIDNumber" },
        ]
      },
      {
        name: "AK_Employee_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "IX_Employee_OrganizationLevel_OrganizationNode",
        fields: [
          { name: "OrganizationLevel" },
          { name: "OrganizationNode" },
        ]
      },
      {
        name: "IX_Employee_OrganizationNode",
        fields: [
          { name: "OrganizationNode" },
        ]
      },
      {
        name: "PK_Employee_BusinessEntityID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
        ]
      },
    ]
  });
};
