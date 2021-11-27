const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    ProductID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Clustered index created by a p"
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    ProductNumber: {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "Unique nonclustered index."
    },
    MakeFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "Unique nonclustered index. Use"
    },
    FinishedGoodsFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "0 = Product is not a salable i"
    },
    Color: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "Product color."
    },
    SafetyStockLevel: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Minimum inventory quantity. "
    },
    ReorderPoint: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Inventory level that triggers "
    },
    StandardCost: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Standard cost of the product."
    },
    ListPrice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false,
      comment: "Selling price."
    },
    Size: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "Product size."
    },
    SizeUnitMeasureCode: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      comment: "Unit of measure for Size colum",
      references: {
        model: 'UnitMeasure',
        key: 'UnitMeasureCode'
      }
    },
    WeightUnitMeasureCode: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      comment: "Unit of measure for Weight col",
      references: {
        model: 'UnitMeasure',
        key: 'UnitMeasureCode'
      }
    },
    Weight: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true,
      comment: "Product weight."
    },
    DaysToManufacture: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Number of days required to man"
    },
    ProductLine: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "R = Road, M = Mountain, T = To"
    },
    Class: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "H = High, M = Medium, L = Low"
    },
    Style: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: "W = Womens, M = Mens, U = Univ"
    },
    ProductSubcategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Product is a member of this pr",
      references: {
        model: 'ProductSubcategory',
        key: 'ProductSubcategoryID'
      }
    },
    ProductModelID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Product is a member of this pr",
      references: {
        model: 'ProductModel',
        key: 'ProductModelID'
      }
    },
    SellStartDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Date the product was available"
    },
    SellEndDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Date the product was no longer"
    },
    DiscontinuedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Date the product was discontin"
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
    tableName: 'Product',
    schema: 'Production',
    timestamps: false,
    indexes: [
      {
        name: "AK_Product_Name",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "AK_Product_ProductNumber",
        unique: true,
        fields: [
          { name: "ProductNumber" },
        ]
      },
      {
        name: "AK_Product_rowguid",
        unique: true,
        fields: [
          { name: "rowguid" },
        ]
      },
      {
        name: "PK_Product_ProductID",
        unique: true,
        fields: [
          { name: "ProductID" },
        ]
      },
    ]
  });
};
