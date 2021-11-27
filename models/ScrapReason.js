const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ScrapReason', {
    ScrapReasonID: {
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
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'ScrapReason',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "AK_ScrapReason_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "PK_ScrapReason_ScrapReasonID",
        unique: true,
        fields: [
          { name: "ScrapReasonID" },
        ]
      },
    ]
  });
};
