const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeePayHistory', {
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
    RateChangeDate: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
      comment: "Date the change in pay is effe"
    },
    Rate: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Salary hourly rate."
    },
    PayFrequency: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 = Salary received monthly, 2"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'EmployeePayHistory',
    schema: 'HumanResources',
    timestamps: false,
    indexes: [
      {
        name: "PK_EmployeePayHistory_BusinessEntityID_RateChangeDate",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
          { name: "RateChangeDate" },
        ]
      },
    ]
  });
};
