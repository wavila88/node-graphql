const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SpecialOffer', {
    SpecialOfferID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    Description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Unique nonclustered index. Use"
    },
    DiscountPct: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Discount precentage."
    },
    Type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Discount type category."
    },
    Category: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Group the discount applies to "
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Discount start date."
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Discount end date."
    },
    MinQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Minimum discount percent allow"
    },
    MaxQty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Maximum discount percent allow"
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
    tableName: 'SpecialOffer',
    schema: 'Sales',
    timestamps: false,
    indexes: [
      {
        name: "AK_SpecialOffer_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_SpecialOffer_SpecialOfferID",
        unique: true,
        fields: [
          { name: "SpecialOfferID" },
        ]
      },
    ]
  });
};
