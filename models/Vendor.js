const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Vendor', {
    BusinessEntityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p",
      references: {
        model: 'BusinessEntity',
        key: 'BusinessEntityID'
      }
    },
    AccountNumber: {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Company name."
    },
    CreditRating: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 = Superior, 2 = Excellent, 3"
    },
    PreferredVendorStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "0 = Do not use if another vend"
    },
    ActiveFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "0 = Vendor no longer used. 1 ="
    },
    PurchasingWebServiceURL: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      comment: "Vendor URL."
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'Vendor',
    schema: 'Purchasing',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "AK_Vendor_AccountNumber",
        unique: true,
        fields: [
          { name: "AccountNumber" },
        ]
      },
      {
        name: "PK_Vendor_BusinessEntityID",
        unique: true,
        fields: [
          { name: "BusinessEntityID" },
        ]
      },
    ]
  });
};
