const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ErrorLog', {
    ErrorLogID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    ErrorTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "The date and time at which the"
    },
    UserName: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "The user who executed the batc"
    },
    ErrorNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "The error number of the error "
    },
    ErrorSeverity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "The severity of the error that"
    },
    ErrorState: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "The state number of the error "
    },
    ErrorProcedure: {
      type: DataTypes.STRING(126),
      allowNull: true,
      comment: "The name of the stored procedu"
    },
    ErrorLine: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "The line number at which the e"
    },
    ErrorMessage: {
      type: DataTypes.STRING(4000),
      allowNull: false,
      comment: "The message text of the error "
    }
  }, {
    sequelize,
    tableName: 'ErrorLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ErrorLog_ErrorLogID",
        unique: true,
        fields: [
          { name: "ErrorLogID" },
        ]
      },
    ]
  });
};
