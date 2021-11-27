var DataTypes = require("sequelize").DataTypes;
var _AWBuildVersion = require("./AWBuildVersion");
var _Address = require("./Address");
var _AddressType = require("./AddressType");
var _BillOfMaterials = require("./BillOfMaterials");
var _BusinessEntity = require("./BusinessEntity");
var _BusinessEntityAddress = require("./BusinessEntityAddress");
var _BusinessEntityContact = require("./BusinessEntityContact");
var _ContactType = require("./ContactType");
var _CountryRegion = require("./CountryRegion");
var _CountryRegionCurrency = require("./CountryRegionCurrency");
var _CreditCard = require("./CreditCard");
var _Culture = require("./Culture");
var _Currency = require("./Currency");
var _CurrencyRate = require("./CurrencyRate");
var _Customer = require("./Customer");
var _DatabaseLog = require("./DatabaseLog");
var _Department = require("./Department");
var _Document = require("./Document");
var _EmailAddress = require("./EmailAddress");
var _Employee = require("./Employee");
var _EmployeeDepartmentHistory = require("./EmployeeDepartmentHistory");
var _EmployeePayHistory = require("./EmployeePayHistory");
var _ErrorLog = require("./ErrorLog");
var _Illustration = require("./Illustration");
var _JobCandidate = require("./JobCandidate");
var _Location = require("./Location");
var _Password = require("./Password");
var _Person = require("./Person");
var _PersonCreditCard = require("./PersonCreditCard");
var _PersonPhone = require("./PersonPhone");
var _PhoneNumberType = require("./PhoneNumberType");
var _Product = require("./Product");
var _ProductCategory = require("./ProductCategory");
var _ProductCostHistory = require("./ProductCostHistory");
var _ProductDescription = require("./ProductDescription");
var _ProductDocument = require("./ProductDocument");
var _ProductInventory = require("./ProductInventory");
var _ProductListPriceHistory = require("./ProductListPriceHistory");
var _ProductModel = require("./ProductModel");
var _ProductModelIllustration = require("./ProductModelIllustration");
var _ProductModelProductDescriptionCulture = require("./ProductModelProductDescriptionCulture");
var _ProductPhoto = require("./ProductPhoto");
var _ProductProductPhoto = require("./ProductProductPhoto");
var _ProductReview = require("./ProductReview");
var _ProductSubcategory = require("./ProductSubcategory");
var _ProductVendor = require("./ProductVendor");
var _PurchaseOrderDetail = require("./PurchaseOrderDetail");
var _PurchaseOrderHeader = require("./PurchaseOrderHeader");
var _SalesOrderDetail = require("./SalesOrderDetail");
var _SalesOrderHeader = require("./SalesOrderHeader");
var _SalesOrderHeaderSalesReason = require("./SalesOrderHeaderSalesReason");
var _SalesPerson = require("./SalesPerson");
var _SalesPersonQuotaHistory = require("./SalesPersonQuotaHistory");
var _SalesReason = require("./SalesReason");
var _SalesTaxRate = require("./SalesTaxRate");
var _SalesTerritory = require("./SalesTerritory");
var _SalesTerritoryHistory = require("./SalesTerritoryHistory");
var _ScrapReason = require("./ScrapReason");
var _Shift = require("./Shift");
var _ShipMethod = require("./ShipMethod");
var _ShoppingCartItem = require("./ShoppingCartItem");
var _SpecialOffer = require("./SpecialOffer");
var _SpecialOfferProduct = require("./SpecialOfferProduct");
var _StateProvince = require("./StateProvince");
var _Store = require("./Store");
var _TransactionHistory = require("./TransactionHistory");
var _TransactionHistoryArchive = require("./TransactionHistoryArchive");
var _UnitMeasure = require("./UnitMeasure");
var _Vendor = require("./Vendor");
var _WorkOrder = require("./WorkOrder");
var _WorkOrderRouting = require("./WorkOrderRouting");

function initModels(sequelize) {
  var AWBuildVersion = _AWBuildVersion(sequelize, DataTypes);
  var Address = _Address(sequelize, DataTypes);
  var AddressType = _AddressType(sequelize, DataTypes);
  var BillOfMaterials = _BillOfMaterials(sequelize, DataTypes);
  var BusinessEntity = _BusinessEntity(sequelize, DataTypes);
  var BusinessEntityAddress = _BusinessEntityAddress(sequelize, DataTypes);
  var BusinessEntityContact = _BusinessEntityContact(sequelize, DataTypes);
  var ContactType = _ContactType(sequelize, DataTypes);
  var CountryRegion = _CountryRegion(sequelize, DataTypes);
  var CountryRegionCurrency = _CountryRegionCurrency(sequelize, DataTypes);
  var CreditCard = _CreditCard(sequelize, DataTypes);
  var Culture = _Culture(sequelize, DataTypes);
  var Currency = _Currency(sequelize, DataTypes);
  var CurrencyRate = _CurrencyRate(sequelize, DataTypes);
  var Customer = _Customer(sequelize, DataTypes);
  var DatabaseLog = _DatabaseLog(sequelize, DataTypes);
  var Department = _Department(sequelize, DataTypes);
  var Document = _Document(sequelize, DataTypes);
  var EmailAddress = _EmailAddress(sequelize, DataTypes);
  var Employee = _Employee(sequelize, DataTypes);
  var EmployeeDepartmentHistory = _EmployeeDepartmentHistory(sequelize, DataTypes);
  var EmployeePayHistory = _EmployeePayHistory(sequelize, DataTypes);
  var ErrorLog = _ErrorLog(sequelize, DataTypes);
  var Illustration = _Illustration(sequelize, DataTypes);
  var JobCandidate = _JobCandidate(sequelize, DataTypes);
  var Location = _Location(sequelize, DataTypes);
  var Password = _Password(sequelize, DataTypes);
  var Person = _Person(sequelize, DataTypes);
  var PersonCreditCard = _PersonCreditCard(sequelize, DataTypes);
  var PersonPhone = _PersonPhone(sequelize, DataTypes);
  var PhoneNumberType = _PhoneNumberType(sequelize, DataTypes);
  var Product = _Product(sequelize, DataTypes);
  var ProductCategory = _ProductCategory(sequelize, DataTypes);
  var ProductCostHistory = _ProductCostHistory(sequelize, DataTypes);
  var ProductDescription = _ProductDescription(sequelize, DataTypes);
  var ProductDocument = _ProductDocument(sequelize, DataTypes);
  var ProductInventory = _ProductInventory(sequelize, DataTypes);
  var ProductListPriceHistory = _ProductListPriceHistory(sequelize, DataTypes);
  var ProductModel = _ProductModel(sequelize, DataTypes);
  var ProductModelIllustration = _ProductModelIllustration(sequelize, DataTypes);
  var ProductModelProductDescriptionCulture = _ProductModelProductDescriptionCulture(sequelize, DataTypes);
  var ProductPhoto = _ProductPhoto(sequelize, DataTypes);
  var ProductProductPhoto = _ProductProductPhoto(sequelize, DataTypes);
  var ProductReview = _ProductReview(sequelize, DataTypes);
  var ProductSubcategory = _ProductSubcategory(sequelize, DataTypes);
  var ProductVendor = _ProductVendor(sequelize, DataTypes);
  var PurchaseOrderDetail = _PurchaseOrderDetail(sequelize, DataTypes);
  var PurchaseOrderHeader = _PurchaseOrderHeader(sequelize, DataTypes);
  var SalesOrderDetail = _SalesOrderDetail(sequelize, DataTypes);
  var SalesOrderHeader = _SalesOrderHeader(sequelize, DataTypes);
  var SalesOrderHeaderSalesReason = _SalesOrderHeaderSalesReason(sequelize, DataTypes);
  var SalesPerson = _SalesPerson(sequelize, DataTypes);
  var SalesPersonQuotaHistory = _SalesPersonQuotaHistory(sequelize, DataTypes);
  var SalesReason = _SalesReason(sequelize, DataTypes);
  var SalesTaxRate = _SalesTaxRate(sequelize, DataTypes);
  var SalesTerritory = _SalesTerritory(sequelize, DataTypes);
  var SalesTerritoryHistory = _SalesTerritoryHistory(sequelize, DataTypes);
  var ScrapReason = _ScrapReason(sequelize, DataTypes);
  var Shift = _Shift(sequelize, DataTypes);
  var ShipMethod = _ShipMethod(sequelize, DataTypes);
  var ShoppingCartItem = _ShoppingCartItem(sequelize, DataTypes);
  var SpecialOffer = _SpecialOffer(sequelize, DataTypes);
  var SpecialOfferProduct = _SpecialOfferProduct(sequelize, DataTypes);
  var StateProvince = _StateProvince(sequelize, DataTypes);
  var Store = _Store(sequelize, DataTypes);
  var TransactionHistory = _TransactionHistory(sequelize, DataTypes);
  var TransactionHistoryArchive = _TransactionHistoryArchive(sequelize, DataTypes);
  var UnitMeasure = _UnitMeasure(sequelize, DataTypes);
  var Vendor = _Vendor(sequelize, DataTypes);
  var WorkOrder = _WorkOrder(sequelize, DataTypes);
  var WorkOrderRouting = _WorkOrderRouting(sequelize, DataTypes);

  CountryRegion.belongsToMany(Currency, { as: 'CurrencyCode_Currencies', through: CountryRegionCurrency, foreignKey: "CountryRegionCode", otherKey: "CurrencyCode" });
  Person.belongsToMany(PhoneNumberType, { as: 'PhoneNumberTypeID_PhoneNumberTypes', through: PersonPhone, foreignKey: "BusinessEntityID", otherKey: "PhoneNumberTypeID" });
  Person.belongsToMany(CreditCard, { as: 'CreditCardID_CreditCards', through: PersonCreditCard, foreignKey: "BusinessEntityID", otherKey: "CreditCardID" });
  PhoneNumberType.belongsToMany(Person, { as: 'BusinessEntityID_People', through: PersonPhone, foreignKey: "PhoneNumberTypeID", otherKey: "BusinessEntityID" });
  Document.belongsToMany(Product, { as: 'ProductID_Products', through: ProductDocument, foreignKey: "DocumentNode", otherKey: "ProductID" });
  Illustration.belongsToMany(ProductModel, { as: 'ProductModelID_ProductModels', through: ProductModelIllustration, foreignKey: "IllustrationID", otherKey: "ProductModelID" });
  Location.belongsToMany(Product, { as: 'ProductID_Product_ProductInventories', through: ProductInventory, foreignKey: "LocationID", otherKey: "ProductID" });
  Product.belongsToMany(Document, { as: 'DocumentNode_Documents', through: ProductDocument, foreignKey: "ProductID", otherKey: "DocumentNode" });
  Product.belongsToMany(Location, { as: 'LocationID_Locations', through: ProductInventory, foreignKey: "ProductID", otherKey: "LocationID" });
  Product.belongsToMany(ProductPhoto, { as: 'ProductPhotoID_ProductPhotos', through: ProductProductPhoto, foreignKey: "ProductID", otherKey: "ProductPhotoID" });
  Product.belongsToMany(Vendor, { as: 'BusinessEntityID_Vendors', through: ProductVendor, foreignKey: "ProductID", otherKey: "BusinessEntityID" });
  Product.belongsToMany(SpecialOffer, { as: 'SpecialOfferID_SpecialOffers', through: SpecialOfferProduct, foreignKey: "ProductID", otherKey: "SpecialOfferID" });
  ProductModel.belongsToMany(Illustration, { as: 'IllustrationID_Illustrations', through: ProductModelIllustration, foreignKey: "ProductModelID", otherKey: "IllustrationID" });
  ProductPhoto.belongsToMany(Product, { as: 'ProductID_Product_ProductProductPhotos', through: ProductProductPhoto, foreignKey: "ProductPhotoID", otherKey: "ProductID" });
  Vendor.belongsToMany(Product, { as: 'ProductID_Product_ProductVendors', through: ProductVendor, foreignKey: "BusinessEntityID", otherKey: "ProductID" });
  CreditCard.belongsToMany(Person, { as: 'BusinessEntityID_Person_PersonCreditCards', through: PersonCreditCard, foreignKey: "CreditCardID", otherKey: "BusinessEntityID" });
  Currency.belongsToMany(CountryRegion, { as: 'CountryRegionCode_CountryRegions', through: CountryRegionCurrency, foreignKey: "CurrencyCode", otherKey: "CountryRegionCode" });
  SalesOrderHeader.belongsToMany(SalesReason, { as: 'SalesReasonID_SalesReasons', through: SalesOrderHeaderSalesReason, foreignKey: "SalesOrderID", otherKey: "SalesReasonID" });
  SalesPerson.belongsToMany(SalesTerritory, { as: 'TerritoryID_SalesTerritories', through: SalesTerritoryHistory, foreignKey: "BusinessEntityID", otherKey: "TerritoryID" });
  SalesReason.belongsToMany(SalesOrderHeader, { as: 'SalesOrderID_SalesOrderHeaders', through: SalesOrderHeaderSalesReason, foreignKey: "SalesReasonID", otherKey: "SalesOrderID" });
  SalesTerritory.belongsToMany(SalesPerson, { as: 'BusinessEntityID_SalesPeople', through: SalesTerritoryHistory, foreignKey: "TerritoryID", otherKey: "BusinessEntityID" });
  SpecialOffer.belongsToMany(Product, { as: 'ProductID_Product_SpecialOfferProducts', through: SpecialOfferProduct, foreignKey: "SpecialOfferID", otherKey: "ProductID" });
  EmployeeDepartmentHistory.belongsTo(Department, { as: "Department", foreignKey: "DepartmentID"});
  Department.hasMany(EmployeeDepartmentHistory, { as: "EmployeeDepartmentHistories", foreignKey: "DepartmentID"});
  EmployeeDepartmentHistory.belongsTo(Employee, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  Employee.hasMany(EmployeeDepartmentHistory, { as: "EmployeeDepartmentHistories", foreignKey: "BusinessEntityID"});
  EmployeePayHistory.belongsTo(Employee, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  Employee.hasMany(EmployeePayHistory, { as: "EmployeePayHistories", foreignKey: "BusinessEntityID"});
  JobCandidate.belongsTo(Employee, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  Employee.hasMany(JobCandidate, { as: "JobCandidates", foreignKey: "BusinessEntityID"});
  Document.belongsTo(Employee, { as: "Owner_Employee", foreignKey: "Owner"});
  Employee.hasMany(Document, { as: "Documents", foreignKey: "Owner"});
  PurchaseOrderHeader.belongsTo(Employee, { as: "Employee", foreignKey: "EmployeeID"});
  Employee.hasMany(PurchaseOrderHeader, { as: "PurchaseOrderHeaders", foreignKey: "EmployeeID"});
  SalesPerson.belongsTo(Employee, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  Employee.hasOne(SalesPerson, { as: "SalesPerson", foreignKey: "BusinessEntityID"});
  EmployeeDepartmentHistory.belongsTo(Shift, { as: "Shift", foreignKey: "ShiftID"});
  Shift.hasMany(EmployeeDepartmentHistory, { as: "EmployeeDepartmentHistories", foreignKey: "ShiftID"});
  BusinessEntityAddress.belongsTo(Address, { as: "Address", foreignKey: "AddressID"});
  Address.hasMany(BusinessEntityAddress, { as: "BusinessEntityAddresses", foreignKey: "AddressID"});
  SalesOrderHeader.belongsTo(Address, { as: "BillToAddress", foreignKey: "BillToAddressID"});
  Address.hasMany(SalesOrderHeader, { as: "SalesOrderHeaders", foreignKey: "BillToAddressID"});
  SalesOrderHeader.belongsTo(Address, { as: "ShipToAddress", foreignKey: "ShipToAddressID"});
  Address.hasMany(SalesOrderHeader, { as: "ShipToAddress_SalesOrderHeaders", foreignKey: "ShipToAddressID"});
  BusinessEntityAddress.belongsTo(AddressType, { as: "AddressType", foreignKey: "AddressTypeID"});
  AddressType.hasMany(BusinessEntityAddress, { as: "BusinessEntityAddresses", foreignKey: "AddressTypeID"});
  BusinessEntityAddress.belongsTo(BusinessEntity, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  BusinessEntity.hasMany(BusinessEntityAddress, { as: "BusinessEntityAddresses", foreignKey: "BusinessEntityID"});
  BusinessEntityContact.belongsTo(BusinessEntity, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  BusinessEntity.hasMany(BusinessEntityContact, { as: "BusinessEntityContacts", foreignKey: "BusinessEntityID"});
  Person.belongsTo(BusinessEntity, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  BusinessEntity.hasOne(Person, { as: "Person", foreignKey: "BusinessEntityID"});
  Vendor.belongsTo(BusinessEntity, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  BusinessEntity.hasOne(Vendor, { as: "Vendor", foreignKey: "BusinessEntityID"});
  Store.belongsTo(BusinessEntity, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  BusinessEntity.hasOne(Store, { as: "Store", foreignKey: "BusinessEntityID"});
  BusinessEntityContact.belongsTo(ContactType, { as: "ContactType", foreignKey: "ContactTypeID"});
  ContactType.hasMany(BusinessEntityContact, { as: "BusinessEntityContacts", foreignKey: "ContactTypeID"});
  StateProvince.belongsTo(CountryRegion, { as: "CountryRegionCode_CountryRegion", foreignKey: "CountryRegionCode"});
  CountryRegion.hasMany(StateProvince, { as: "StateProvinces", foreignKey: "CountryRegionCode"});
  CountryRegionCurrency.belongsTo(CountryRegion, { as: "CountryRegionCode_CountryRegion", foreignKey: "CountryRegionCode"});
  CountryRegion.hasMany(CountryRegionCurrency, { as: "CountryRegionCurrencies", foreignKey: "CountryRegionCode"});
  SalesTerritory.belongsTo(CountryRegion, { as: "CountryRegionCode_CountryRegion", foreignKey: "CountryRegionCode"});
  CountryRegion.hasMany(SalesTerritory, { as: "SalesTerritories", foreignKey: "CountryRegionCode"});
  Employee.belongsTo(Person, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  Person.hasOne(Employee, { as: "Employee", foreignKey: "BusinessEntityID"});
  BusinessEntityContact.belongsTo(Person, { as: "Person", foreignKey: "PersonID"});
  Person.hasMany(BusinessEntityContact, { as: "BusinessEntityContacts", foreignKey: "PersonID"});
  EmailAddress.belongsTo(Person, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  Person.hasMany(EmailAddress, { as: "EmailAddresses", foreignKey: "BusinessEntityID"});
  Password.belongsTo(Person, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  Person.hasOne(Password, { as: "Password", foreignKey: "BusinessEntityID"});
  PersonPhone.belongsTo(Person, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  Person.hasMany(PersonPhone, { as: "PersonPhones", foreignKey: "BusinessEntityID"});
  Customer.belongsTo(Person, { as: "Person", foreignKey: "PersonID"});
  Person.hasMany(Customer, { as: "Customers", foreignKey: "PersonID"});
  PersonCreditCard.belongsTo(Person, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  Person.hasMany(PersonCreditCard, { as: "PersonCreditCards", foreignKey: "BusinessEntityID"});
  PersonPhone.belongsTo(PhoneNumberType, { as: "PhoneNumberType", foreignKey: "PhoneNumberTypeID"});
  PhoneNumberType.hasMany(PersonPhone, { as: "PersonPhones", foreignKey: "PhoneNumberTypeID"});
  Address.belongsTo(StateProvince, { as: "StateProvince", foreignKey: "StateProvinceID"});
  StateProvince.hasMany(Address, { as: "Addresses", foreignKey: "StateProvinceID"});
  SalesTaxRate.belongsTo(StateProvince, { as: "StateProvince", foreignKey: "StateProvinceID"});
  StateProvince.hasMany(SalesTaxRate, { as: "SalesTaxRates", foreignKey: "StateProvinceID"});
  ProductModelProductDescriptionCulture.belongsTo(Culture, { as: "Culture", foreignKey: "CultureID"});
  Culture.hasMany(ProductModelProductDescriptionCulture, { as: "ProductModelProductDescriptionCultures", foreignKey: "CultureID"});
  ProductDocument.belongsTo(Document, { as: "DocumentNode_Document", foreignKey: "DocumentNode"});
  Document.hasMany(ProductDocument, { as: "ProductDocuments", foreignKey: "DocumentNode"});
  ProductModelIllustration.belongsTo(Illustration, { as: "Illustration", foreignKey: "IllustrationID"});
  Illustration.hasMany(ProductModelIllustration, { as: "ProductModelIllustrations", foreignKey: "IllustrationID"});
  ProductInventory.belongsTo(Location, { as: "Location", foreignKey: "LocationID"});
  Location.hasMany(ProductInventory, { as: "ProductInventories", foreignKey: "LocationID"});
  WorkOrderRouting.belongsTo(Location, { as: "Location", foreignKey: "LocationID"});
  Location.hasMany(WorkOrderRouting, { as: "WorkOrderRoutings", foreignKey: "LocationID"});
  BillOfMaterials.belongsTo(Product, { as: "Component", foreignKey: "ComponentID"});
  Product.hasMany(BillOfMaterials, { as: "BillOfMaterials", foreignKey: "ComponentID"});
  BillOfMaterials.belongsTo(Product, { as: "ProductAssembly", foreignKey: "ProductAssemblyID"});
  Product.hasMany(BillOfMaterials, { as: "ProductAssembly_BillOfMaterials", foreignKey: "ProductAssemblyID"});
  ProductCostHistory.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(ProductCostHistory, { as: "ProductCostHistories", foreignKey: "ProductID"});
  ProductDocument.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(ProductDocument, { as: "ProductDocuments", foreignKey: "ProductID"});
  ProductInventory.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(ProductInventory, { as: "ProductInventories", foreignKey: "ProductID"});
  ProductListPriceHistory.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(ProductListPriceHistory, { as: "ProductListPriceHistories", foreignKey: "ProductID"});
  ProductProductPhoto.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(ProductProductPhoto, { as: "ProductProductPhotos", foreignKey: "ProductID"});
  ProductReview.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(ProductReview, { as: "ProductReviews", foreignKey: "ProductID"});
  TransactionHistory.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(TransactionHistory, { as: "TransactionHistories", foreignKey: "ProductID"});
  WorkOrder.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(WorkOrder, { as: "WorkOrders", foreignKey: "ProductID"});
  ProductVendor.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(ProductVendor, { as: "ProductVendors", foreignKey: "ProductID"});
  PurchaseOrderDetail.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(PurchaseOrderDetail, { as: "PurchaseOrderDetails", foreignKey: "ProductID"});
  ShoppingCartItem.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(ShoppingCartItem, { as: "ShoppingCartItems", foreignKey: "ProductID"});
  SpecialOfferProduct.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(SpecialOfferProduct, { as: "SpecialOfferProducts", foreignKey: "ProductID"});
  ProductSubcategory.belongsTo(ProductCategory, { as: "ProductCategory", foreignKey: "ProductCategoryID"});
  ProductCategory.hasMany(ProductSubcategory, { as: "ProductSubcategories", foreignKey: "ProductCategoryID"});
  ProductModelProductDescriptionCulture.belongsTo(ProductDescription, { as: "ProductDescription", foreignKey: "ProductDescriptionID"});
  ProductDescription.hasMany(ProductModelProductDescriptionCulture, { as: "ProductModelProductDescriptionCultures", foreignKey: "ProductDescriptionID"});
  Product.belongsTo(ProductModel, { as: "ProductModel", foreignKey: "ProductModelID"});
  ProductModel.hasMany(Product, { as: "Products", foreignKey: "ProductModelID"});
  ProductModelIllustration.belongsTo(ProductModel, { as: "ProductModel", foreignKey: "ProductModelID"});
  ProductModel.hasMany(ProductModelIllustration, { as: "ProductModelIllustrations", foreignKey: "ProductModelID"});
  ProductModelProductDescriptionCulture.belongsTo(ProductModel, { as: "ProductModel", foreignKey: "ProductModelID"});
  ProductModel.hasMany(ProductModelProductDescriptionCulture, { as: "ProductModelProductDescriptionCultures", foreignKey: "ProductModelID"});
  ProductProductPhoto.belongsTo(ProductPhoto, { as: "ProductPhoto", foreignKey: "ProductPhotoID"});
  ProductPhoto.hasMany(ProductProductPhoto, { as: "ProductProductPhotos", foreignKey: "ProductPhotoID"});
  Product.belongsTo(ProductSubcategory, { as: "ProductSubcategory", foreignKey: "ProductSubcategoryID"});
  ProductSubcategory.hasMany(Product, { as: "Products", foreignKey: "ProductSubcategoryID"});
  WorkOrder.belongsTo(ScrapReason, { as: "ScrapReason", foreignKey: "ScrapReasonID"});
  ScrapReason.hasMany(WorkOrder, { as: "WorkOrders", foreignKey: "ScrapReasonID"});
  BillOfMaterials.belongsTo(UnitMeasure, { as: "UnitMeasureCode_UnitMeasure", foreignKey: "UnitMeasureCode"});
  UnitMeasure.hasMany(BillOfMaterials, { as: "BillOfMaterials", foreignKey: "UnitMeasureCode"});
  Product.belongsTo(UnitMeasure, { as: "SizeUnitMeasureCode_UnitMeasure", foreignKey: "SizeUnitMeasureCode"});
  UnitMeasure.hasMany(Product, { as: "Products", foreignKey: "SizeUnitMeasureCode"});
  Product.belongsTo(UnitMeasure, { as: "WeightUnitMeasureCode_UnitMeasure", foreignKey: "WeightUnitMeasureCode"});
  UnitMeasure.hasMany(Product, { as: "WeightUnitMeasureCode_Products", foreignKey: "WeightUnitMeasureCode"});
  ProductVendor.belongsTo(UnitMeasure, { as: "UnitMeasureCode_UnitMeasure", foreignKey: "UnitMeasureCode"});
  UnitMeasure.hasMany(ProductVendor, { as: "ProductVendors", foreignKey: "UnitMeasureCode"});
  WorkOrderRouting.belongsTo(WorkOrder, { as: "WorkOrder", foreignKey: "WorkOrderID"});
  WorkOrder.hasMany(WorkOrderRouting, { as: "WorkOrderRoutings", foreignKey: "WorkOrderID"});
  PurchaseOrderDetail.belongsTo(PurchaseOrderHeader, { as: "PurchaseOrder", foreignKey: "PurchaseOrderID"});
  PurchaseOrderHeader.hasMany(PurchaseOrderDetail, { as: "PurchaseOrderDetails", foreignKey: "PurchaseOrderID"});
  PurchaseOrderHeader.belongsTo(ShipMethod, { as: "ShipMethod", foreignKey: "ShipMethodID"});
  ShipMethod.hasMany(PurchaseOrderHeader, { as: "PurchaseOrderHeaders", foreignKey: "ShipMethodID"});
  SalesOrderHeader.belongsTo(ShipMethod, { as: "ShipMethod", foreignKey: "ShipMethodID"});
  ShipMethod.hasMany(SalesOrderHeader, { as: "SalesOrderHeaders", foreignKey: "ShipMethodID"});
  ProductVendor.belongsTo(Vendor, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  Vendor.hasMany(ProductVendor, { as: "ProductVendors", foreignKey: "BusinessEntityID"});
  PurchaseOrderHeader.belongsTo(Vendor, { as: "Vendor", foreignKey: "VendorID"});
  Vendor.hasMany(PurchaseOrderHeader, { as: "PurchaseOrderHeaders", foreignKey: "VendorID"});
  PersonCreditCard.belongsTo(CreditCard, { as: "CreditCard", foreignKey: "CreditCardID"});
  CreditCard.hasMany(PersonCreditCard, { as: "PersonCreditCards", foreignKey: "CreditCardID"});
  SalesOrderHeader.belongsTo(CreditCard, { as: "CreditCard", foreignKey: "CreditCardID"});
  CreditCard.hasMany(SalesOrderHeader, { as: "SalesOrderHeaders", foreignKey: "CreditCardID"});
  CountryRegionCurrency.belongsTo(Currency, { as: "CurrencyCode_Currency", foreignKey: "CurrencyCode"});
  Currency.hasMany(CountryRegionCurrency, { as: "CountryRegionCurrencies", foreignKey: "CurrencyCode"});
  CurrencyRate.belongsTo(Currency, { as: "FromCurrencyCode_Currency", foreignKey: "FromCurrencyCode"});
  Currency.hasMany(CurrencyRate, { as: "CurrencyRates", foreignKey: "FromCurrencyCode"});
  CurrencyRate.belongsTo(Currency, { as: "ToCurrencyCode_Currency", foreignKey: "ToCurrencyCode"});
  Currency.hasMany(CurrencyRate, { as: "ToCurrencyCode_CurrencyRates", foreignKey: "ToCurrencyCode"});
  SalesOrderHeader.belongsTo(CurrencyRate, { as: "CurrencyRate", foreignKey: "CurrencyRateID"});
  CurrencyRate.hasMany(SalesOrderHeader, { as: "SalesOrderHeaders", foreignKey: "CurrencyRateID"});
  SalesOrderHeader.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerID"});
  Customer.hasMany(SalesOrderHeader, { as: "SalesOrderHeaders", foreignKey: "CustomerID"});
  SalesOrderDetail.belongsTo(SalesOrderHeader, { as: "SalesOrder", foreignKey: "SalesOrderID"});
  SalesOrderHeader.hasMany(SalesOrderDetail, { as: "SalesOrderDetails", foreignKey: "SalesOrderID"});
  SalesOrderHeaderSalesReason.belongsTo(SalesOrderHeader, { as: "SalesOrder", foreignKey: "SalesOrderID"});
  SalesOrderHeader.hasMany(SalesOrderHeaderSalesReason, { as: "SalesOrderHeaderSalesReasons", foreignKey: "SalesOrderID"});
  SalesOrderHeader.belongsTo(SalesPerson, { as: "SalesPerson", foreignKey: "SalesPersonID"});
  SalesPerson.hasMany(SalesOrderHeader, { as: "SalesOrderHeaders", foreignKey: "SalesPersonID"});
  SalesPersonQuotaHistory.belongsTo(SalesPerson, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  SalesPerson.hasMany(SalesPersonQuotaHistory, { as: "SalesPersonQuotaHistories", foreignKey: "BusinessEntityID"});
  SalesTerritoryHistory.belongsTo(SalesPerson, { as: "BusinessEntity", foreignKey: "BusinessEntityID"});
  SalesPerson.hasMany(SalesTerritoryHistory, { as: "SalesTerritoryHistories", foreignKey: "BusinessEntityID"});
  Store.belongsTo(SalesPerson, { as: "SalesPerson", foreignKey: "SalesPersonID"});
  SalesPerson.hasMany(Store, { as: "Stores", foreignKey: "SalesPersonID"});
  SalesOrderHeaderSalesReason.belongsTo(SalesReason, { as: "SalesReason", foreignKey: "SalesReasonID"});
  SalesReason.hasMany(SalesOrderHeaderSalesReason, { as: "SalesOrderHeaderSalesReasons", foreignKey: "SalesReasonID"});
  StateProvince.belongsTo(SalesTerritory, { as: "Territory", foreignKey: "TerritoryID"});
  SalesTerritory.hasMany(StateProvince, { as: "StateProvinces", foreignKey: "TerritoryID"});
  Customer.belongsTo(SalesTerritory, { as: "Territory", foreignKey: "TerritoryID"});
  SalesTerritory.hasMany(Customer, { as: "Customers", foreignKey: "TerritoryID"});
  SalesOrderHeader.belongsTo(SalesTerritory, { as: "Territory", foreignKey: "TerritoryID"});
  SalesTerritory.hasMany(SalesOrderHeader, { as: "SalesOrderHeaders", foreignKey: "TerritoryID"});
  SalesPerson.belongsTo(SalesTerritory, { as: "Territory", foreignKey: "TerritoryID"});
  SalesTerritory.hasMany(SalesPerson, { as: "SalesPeople", foreignKey: "TerritoryID"});
  SalesTerritoryHistory.belongsTo(SalesTerritory, { as: "Territory", foreignKey: "TerritoryID"});
  SalesTerritory.hasMany(SalesTerritoryHistory, { as: "SalesTerritoryHistories", foreignKey: "TerritoryID"});
  SpecialOfferProduct.belongsTo(SpecialOffer, { as: "SpecialOffer", foreignKey: "SpecialOfferID"});
  SpecialOffer.hasMany(SpecialOfferProduct, { as: "SpecialOfferProducts", foreignKey: "SpecialOfferID"});
  SalesOrderDetail.belongsTo(SpecialOfferProduct, { as: "Product", foreignKey: "ProductID"});
  SpecialOfferProduct.hasMany(SalesOrderDetail, { as: "SalesOrderDetails", foreignKey: "ProductID"});
  SalesOrderDetail.belongsTo(SpecialOfferProduct, { as: "SpecialOffer", foreignKey: "SpecialOfferID"});
  SpecialOfferProduct.hasMany(SalesOrderDetail, { as: "SpecialOffer_SalesOrderDetails", foreignKey: "SpecialOfferID"});
  Customer.belongsTo(Store, { as: "Store", foreignKey: "StoreID"});
  Store.hasMany(Customer, { as: "Customers", foreignKey: "StoreID"});

  return {
    AWBuildVersion,
    Address,
    AddressType,
    BillOfMaterials,
    BusinessEntity,
    BusinessEntityAddress,
    BusinessEntityContact,
    ContactType,
    CountryRegion,
    CountryRegionCurrency,
    CreditCard,
    Culture,
    Currency,
    CurrencyRate,
    Customer,
    DatabaseLog,
    Department,
    Document,
    EmailAddress,
    Employee,
    EmployeeDepartmentHistory,
    EmployeePayHistory,
    ErrorLog,
    Illustration,
    JobCandidate,
    Location,
    Password,
    Person,
    PersonCreditCard,
    PersonPhone,
    PhoneNumberType,
    Product,
    ProductCategory,
    ProductCostHistory,
    ProductDescription,
    ProductDocument,
    ProductInventory,
    ProductListPriceHistory,
    ProductModel,
    ProductModelIllustration,
    ProductModelProductDescriptionCulture,
    ProductPhoto,
    ProductProductPhoto,
    ProductReview,
    ProductSubcategory,
    ProductVendor,
    PurchaseOrderDetail,
    PurchaseOrderHeader,
    SalesOrderDetail,
    SalesOrderHeader,
    SalesOrderHeaderSalesReason,
    SalesPerson,
    SalesPersonQuotaHistory,
    SalesReason,
    SalesTaxRate,
    SalesTerritory,
    SalesTerritoryHistory,
    ScrapReason,
    Shift,
    ShipMethod,
    ShoppingCartItem,
    SpecialOffer,
    SpecialOfferProduct,
    StateProvince,
    Store,
    TransactionHistory,
    TransactionHistoryArchive,
    UnitMeasure,
    Vendor,
    WorkOrder,
    WorkOrderRouting,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
