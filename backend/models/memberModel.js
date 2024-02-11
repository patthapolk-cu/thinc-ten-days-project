const mongoose = require("mongoose");
const memberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userid: {
    type: Number,
    required: true,
    unique: true,
  },
  cash: {
    type: Number,
    required: true,
  },
  product: {
    type: [Number],
    default: [],
  },
  wishlist: {
    type: [
      {
        orderid: Number,
        productId: Number,
        amount: Number,
      },
    ],
    default: [],
  },
  cart: {
    type: [
      {
        orderid: Number,
        productId: Number,
        amount: Number,
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model("Member", memberSchema);
