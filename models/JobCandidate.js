const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('JobCandidate', {
    JobCandidateID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    BusinessEntityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Nonclustered index.",
      references: {
        model: 'Employee',
        key: 'BusinessEntityID'
      }
    },
    Resume: {
      type: "XML",
      allowNull: true,
      comment: "Résumé in XML format."
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'JobCandidate',
    schema: 'HumanResources',
    timestamps: false,
    indexes: [
      {
        name: "IX_JobCandidate_BusinessEntityID",
        fields: [
          { name: "BusinessEntityID" },
        ]
      },
      {
        name: "PK_JobCandidate_JobCandidateID",
        unique: true,
        fields: [
          { name: "JobCandidateID" },
        ]
      },
    ]
  });
};
