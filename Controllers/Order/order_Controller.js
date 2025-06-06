// OrderController.js
const db = require("../../db");

exports.placeOrder = async (req, res) => {
  const user_id = req.user.id;
  const { shipping_address, payment_method } = req.body;

  try {
    const cartItems = await db("cart_items")
      .join("products", "cart_items.product_id", "products.id")
      .where("cart_items.user_id", user_id)
      .select("products.id", "products.price", "cart_items.quantity");

    if (cartItems.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const [order] = await db("user_orders")
      .insert({ user_id, total, shipping_address, payment_method })
      .returning("*");

    for (const item of cartItems) {
      await db("user_order_items").insert({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
      });
      const qty = item.quantity;
      const prod = await db("products").where({ id: item.id }).first();

      await db("products")
        .where({ id: item.id })
        .update({ quantity: prod.quantity - qty });
    }

    await db("cart_items").where({ user_id }).del();

    res.json({ message: "Order placed successfully", orderId: order.id });
  } catch (err) {
    console.error("Order placement error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.orderHistory = async (req, res) => {
  const user_id = req.user.id;

  try {
    const orders = await db("orders")
      .where({ user_id })
      .orderBy("ordered_at", "desc");

    const detailedOrders = await Promise.all(
      orders.map(async (order) => {
        const items = await db("user_order_items")
          .join("products", "user_order_items.product_id", "products.id")
          .select(
            "products.name",
            "user_order_items.quantity",
            "order_items.price"
          )
          .where("user_order_items.order_id", order.id);

        return {
          ...order,
          items,
        };
      })
    );

    res.json(detailedOrders);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
