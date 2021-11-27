const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Department', {
    DepartmentID: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    GroupName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Name of the group to which the"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'Department',
    schema: 'HumanResources',
    timestamps: false,
    indexes: [
      {
        name: "AK_Department_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "PK_Department_DepartmentID",
        unique: true,
        fields: [
          { name: "DepartmentID" },
        ]
      },
    ]
  });
};
