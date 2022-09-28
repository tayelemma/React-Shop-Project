const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
    img: String,
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: Number,
    inStock: { type: Boolean}

  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
