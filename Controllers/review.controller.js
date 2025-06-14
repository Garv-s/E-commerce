import db from "../db.js";
const createReview = async (req, res) => {
  const user_id = req.user.id;
  var { product_id, rating, comment } = req.body;
  const id = product_id;
  const prod = await db("products").where({ id }).first();
  if (!prod) {
    return res.status(404).json({ error: "Product id does not exist" });
  }
  try {
    const existingReview = await db("reviews")
      .where({ user_id, product_id })
      .first();
    if (existingReview) {
      const rid = existingReview.id;
      if (!comment) {
        comment = existingReview.comment;
      }
      if (!rating) {
        rating = existingReview.rating;
      }
      await db("reviews").where({ id: rid, user_id, product_id }).update({
        comment: comment,
        rating: rating,
      });
      res.status(201).json({ message: "Review was succesfully updated" });
    } else {
      await db("reviews").insert({
        user_id,
        product_id,
        rating,
        comment,
      });

      res.status(201).json({ message: "Review was succesfully submitted" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ erro: "Review submission failed" });
  }
};

const viewReview = async (req, res) => {
  const { product_id } = req.body;
  const Reviews = await db("reviews").where({ product_id });
  if (!Reviews) {
    return res
      .status(404)
      .json({ message: "There are no reviews on this product yet." });
  } else {
    try {
      var sum = 0;
      var count = 0;
      const Reviews = await db("reviews").where({ product_id });
      while (count < Reviews.length) {
        sum += Reviews[count].rating;
        count += 1;
      }
      const averageRating = sum / count;
      //console.log(Reviews.comment);
      res.status(200).json({
        no_of_reviews: count,
        average_rating: averageRating,
        reviews: Reviews,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "server error" });
    }
  }
};

export default {
  createReview,
  viewReview,
};
