const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
} = require("../../controllers/shop/order-controller");

// Create order route
router.post("/create", createOrder);

// Get all orders by user ID
router.get("/:userId", getAllOrdersByUser);

// Get order details by order ID
router.get("/order/:id", getOrderDetails);

module.exports = router;
