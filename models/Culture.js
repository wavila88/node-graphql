const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Culture', {
    CultureID: {
      type: DataTypes.CHAR(6),
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
    tableName: 'Culture',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "AK_Culture_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "PK_Culture_CultureID",
        unique: true,
        fields: [
          { name: "CultureID" },
        ]
      },
    ]
  });
};
