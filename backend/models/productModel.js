const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productId: {
    type: Number,
    required: true,
    unique: true,
  },
  tag: {
    type: [String],
    default: [],
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productDetail: {
    type: String,
    required: true,
  },
  productStock: {
    type: Number,
    required: true,
  },
  productOwnerId: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;