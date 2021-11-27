const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Document', {
    DocumentNode: {
      type: "HIERARCHYID",
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    DocumentLevel: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Depth in the document hierarch"
    },
    Title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    Owner: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Unique nonclustered index. Use",
      references: {
        model: 'Employee',
        key: 'BusinessEntityID'
      }
    },
    FolderFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "Unique nonclustered index."
    },
    FileName: {
      type: DataTypes.STRING(400),
      allowNull: false,
      comment: "File name of the document"
    },
    FileExtension: {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: "File extension indicating the "
    },
    Revision: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      comment: "Revision number of the documen"
    },
    ChangeNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Engineering change approval nu"
    },
    Status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 = Pending approval, 2 = Appr"
    },
    DocumentSummary: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Document abstract."
    },
    Document: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "Complete document."
    },
    rowguid: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "ROWGUIDCOL number uniquely ide",
      unique: "UQ__Document__F73921F7C5112C2E"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'Document',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "AK_Document_DocumentLevel_DocumentNode",
        unique: true,
        fields: [
          { name: "DocumentLevel" },
          { name: "DocumentNode" },
        ]
      },
      {
        name: "AK_Document_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "IX_Document_FileName_Revision",
        fields: [
          { name: "FileName" },
          { name: "Revision" },
        ]
      },
      {
        name: "PK_Document_DocumentNode",
        unique: true,
        fields: [
          { name: "DocumentNode" },
        ]
      },
      {
        name: "UQ__Document__F73921F7C5112C2E",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
    ]
  });
};
