const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PhoneNumberType', {
    PhoneNumberTypeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Name of the telephone number t"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'PhoneNumberType',
    schema: 'Person',
    timestamps: false,
    indexes: [
      {
        name: "PK_PhoneNumberType_PhoneNumberTypeID",
        unique: true,
        fields: [
          { name: "PhoneNumberTypeID" },
        ]
      },
    ]
  });
};
