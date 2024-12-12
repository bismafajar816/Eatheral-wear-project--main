const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    imageUrl: { type: String },  // Store Cloudinary image URL
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String },
    price: { type: Number, required: true },
    salePrice: { type: Number },
    totalStock: { type: Number, required: true },
    averageReview: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
