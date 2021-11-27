const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Shift', {
    ShiftID: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    StartTime: {
      type: DataTypes.TIME,
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    EndTime: {
      type: DataTypes.TIME,
      allowNull: false,
      comment: "Shift end time."
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'Shift',
    schema: 'HumanResources',
    timestamps: false,
    indexes: [
      {
        name: "AK_Shift_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "AK_Shift_StartTime_EndTime",
        unique: true,
        fields: [
          { name: "StartTime" },
          { name: "EndTime" },
        ]
      },
      {
        name: "PK_Shift_ShiftID",
        unique: true,
        fields: [
          { name: "ShiftID" },
        ]
      },
    ]
  });
};
