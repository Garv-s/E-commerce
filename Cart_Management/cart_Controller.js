const db = require('../db');

exports.addToCart = async (req, res) => {
  const { product_id, quantity } = req.body;
  const user_id = req.user.id;

  try {
    const existingItem = await db('cart_items')
      .where({ user_id, product_id })
      .first();

    if (existingItem) {
      await db('cart_items')
        .where({ user_id, product_id })
        .update({
          quantity: existingItem.quantity + quantity
        });
      if (quantity===0){
        const { product_id } = req.body;
        const user_id = req.user.id;

        const deletedRows = await db('cart_items')
        .where({ user_id, product_id })
        .del();
              
            }
      res.status(200).json({ message: 'Cart item updated' });
    } else {
      await db('cart_items').insert({
        user_id,
        product_id,
        quantity
      });
      res.status(201).json({ message: 'Item added to cart' });
    }
    
  } catch (err) {
    console.error("Add to cart error:", err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.removeFromCart = async (req, res) => {
  const { product_id } = req.body;
  const user_id = req.user.id;

  try {
    const deletedRows = await db('cart_items')
      .where({ user_id, product_id })
      .del();

    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    res.status(200).json({ message: 'Item removed from cart' });
  } catch (err) {
    console.error("Remove from cart error:", err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.viewCart = async (req, res) => {
  const user_id = req.user.id;

  try {
    const items = await db('cart_items')
      .join('products', 'cart_items.product_id', 'products.id')
      .select('products.name', 'products.price', 'cart_items.quantity')
      .where('cart_items.user_id', user_id);
      
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
