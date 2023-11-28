
const Cart = require("./Cart");
const Category = require("./Category");
const Image = require("./Image");
const Product = require("./Product");
const Purchase = require("./Purchase");
const User = require("./User");



Product.hasMany(Image);
Image.belongsTo(Product)

Category.hasMany(Product)
Product.belongsTo(Category);

User.hasMany(Cart);
Cart.belongsTo(User);

Product.hasMany(Cart);
Cart.belongsTo(Product);

User.hasMany(Purchase);
Purchase.belongsTo(User);

Product.hasMany(Purchase);
Purchase.belongsTo(Product);
