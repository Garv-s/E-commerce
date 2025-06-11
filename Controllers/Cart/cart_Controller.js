import db from '../../db.js';


const addToCart = async (req, res) => {
  const user_id = req.user.id;
  const { product_id, quantity } = req.body;
  const id=product_id;
  const prod=await db('products').where({id}).first();
  if (!prod){
    return res.status(404).json({error:"Product id does not exist"});
  }
  else{

  try {
    const existingItem = await db('cart_items')
      .where({ user_id, product_id })
      .first();

    if (existingItem) {
      const q=prod.quantity;
      const result = await db('cart_items')
        .where({ user_id, product_id });

      const qe = result[0].quantity;

      //console.log(q);
      //console.log(qe);
      if (prod.quantity<(existingItem.quantity+quantity)){
        return res.status(404).json({error:"Maximum quantity you can add is "+(q-qe)+" units"})
      }

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
      const qty=prod.quantity;
      if (prod.quantity<(quantity)){
        return res.status(404).json({error:"Maximum available quantity is "+(qty)+" units"})
      }
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
  }}
};

const removeFromCart = async (req, res) => {
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

const viewCart = async (req, res) => {
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

export default {
  addToCart,
  removeFromCart,
  viewCart
};