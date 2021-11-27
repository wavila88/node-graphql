const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Location', {
    LocationID: {
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
    CostRate: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Standard hourly cost of the ma"
    },
    Availability: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Work capacity (in hours) of th"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'Location',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "AK_Location_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "PK_Location_LocationID",
        unique: true,
        fields: [
          { name: "LocationID" },
        ]
      },
    ]
  });
};
