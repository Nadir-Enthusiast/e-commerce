import React from "react";
import "./Product.scss"
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, description, price, rating, wid}) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        description: description,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div id={id} className="product" style={{width: `${wid}`}}>
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button className="add-to-cart-btn" onClick={ addToCart }>Add to Cart</button>
      </div>

      <img src={image} alt="" />
    </div>
  );
}

export default Product;
