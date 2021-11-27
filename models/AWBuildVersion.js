const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AWBuildVersion', {
    SystemInformationID: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    'Database Version': {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "Version number of the database"
    },
    VersionDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Date and time the record was l"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'AWBuildVersion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AWBuildVersion_SystemInformationID",
        unique: true,
        fields: [
          { name: "SystemInformationID" },
        ]
      },
    ]
  });
};
