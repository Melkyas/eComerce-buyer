


import React, { useContext } from "react";
import { AppContext } from "../main/context";

function ShoppingItem({ item }) {
  var { id, title, image, price, description } = item;
  const { cart, setCart } = useContext(AppContext);

  const addToCart = () => {
    setCart([...cart, { id, title, price, description }]);
  };

  return (
    <div className="col-sm-6 col-lg-4 mb-4 click" onClick={(e) => addToCart()}>
      <div className="block-4 text-center border">
        <figure className="block-4-image">
          <img src={image} alt="placeholder" className="img-fluid" />
        </figure>
        <div className="block-4-text p-4">
          <h3>{title}</h3>
          <p className="mb-0">{description}</p>
          <p className="text-dark font-weight-bold">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingItem;
