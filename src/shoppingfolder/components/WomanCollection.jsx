import React, { useState } from "react";

const WomanCollection = (props) => {
  const {
    title,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    price1,
    price2,
    price3,
    price4,
    price5,
    price6,
    offer1,
    offer2,
    offer3,
    offer4,
    offer5,
    offer6,
  } = props.ladiesFashion;

  const [cart, setCart] = useState([]);

  // Handle adding to cart
  const addToCart = (image, price, offer, title) => {
    const existingItem = cart.find((item) => item.title === title); // Check if item already in cart
    if (existingItem) {
      alert("Item is already in the cart!");
      return;
    }
    setCart([...cart, { image, price, offer, title }]);
    alert("Item added to cart!");
  };

  // Render individual product cards
  const renderProductCard = (image, price, offer, index) => {
    const isInStock = index % 2 === 0; // Example: assume even-indexed items are in stock

    return (
      <div className="productCard" key={index}>
        <img src={image || "https://via.placeholder.com/220"} alt="product" />
        <div className="productDetails">
          <p className="productTitle">{title}</p>
          <p>Price: {price}</p>
          <p>Offer: {offer}</p>
          <p className={isInStock ? "inStock" : "outOfStock"}>
            {isInStock ? "In Stock" : "Out of Stock"}
          </p>
          <button
            onClick={() => addToCart(image, price, offer, title)}
            disabled={!isInStock}
          >
            {isInStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="collectionSection">
      <h2>{title}</h2>

      <div className="productGrid">
        {renderProductCard(image1, price1, offer1, 1)}
        {renderProductCard(image2, price2, offer2, 2)}
        {renderProductCard(image3, price3, offer3, 3)}
        {renderProductCard(image4, price4, offer4, 4)}
        {renderProductCard(image5, price5, offer5, 5)}
        {renderProductCard(image6, price6, offer6, 6)}
      </div>

      {/* Cart Section */}
      <div className="cartSection">
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p className="emptyCart">Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt="cart item" />
                <span>{item.title}</span>
                <span>{item.price}</span>
                <span>{item.offer}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WomanCollection;
