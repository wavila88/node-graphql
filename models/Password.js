const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Password', {
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
    PasswordHash: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "Password for the e-mail accoun"
    },
    PasswordSalt: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "Random value concatenated with"
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
    tableName: 'Password',
    schema: 'Person',
    timestamps: false,
    indexes: [
      {
        name: "PK_Password_BusinessEntityID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
        ]
      },
    ]
  });
};
