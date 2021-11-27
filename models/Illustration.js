const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Illustration', {
    IllustrationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    Diagram: {
      type: "XML",
      allowNull: true,
      comment: "Illustrations used in manufact"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'Illustration',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "PK_Illustration_IllustrationID",
        unique: true,
        fields: [
          { name: "IllustrationID" },
        ]
      },
    ]
  });
};
