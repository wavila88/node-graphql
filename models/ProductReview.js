const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductReview', {
    ProductReviewID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nonclustered index.",
      references: {
        model: 'Product',
        key: 'ProductID'
      }
    },
    ReviewerName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Name of the reviewer."
    },
    ReviewDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date review was submitted."
    },
    EmailAddress: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Reviewer's e-mail address."
    },
    Rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Product rating given by the re"
    },
    Comments: {
      type: DataTypes.STRING(3850),
      allowNull: true,
      comment: "Reviewer's comments"
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      comment: "Date and time the record was l"
    }
  }, {
    sequelize,
    tableName: 'ProductReview',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "IX_ProductReview_ProductID_Name",
        fields: [
          { name: "ProductID" },
          { name: "ReviewerName" },
        ]
      },
      {
        name: "PK_ProductReview_ProductReviewID",
        unique: true,
        fields: [
          { name: "ProductReviewID" },
        ]
      },
    ]
  });
};
