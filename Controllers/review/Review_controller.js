const db = require("../../db");
exports.createReview = async (req, res) => {
  const user_id = req.user.id;
  const { product_id, rating, comment } = req.body;
  try {
    await db("reviews").insert({
      user_id,
      product_id,
      rating,
      comment,
    });

    res.status(201).json({ message: "Review was succesfully submitted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ erro: "Review submission failed" });
  }
};
