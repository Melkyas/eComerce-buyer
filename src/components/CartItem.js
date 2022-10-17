


import React from "react";

function CartItem({ item, remove }) {
  const { id, title, price, description } = item;

  return (
    <div className="row p-1">
      <div className="col-12 col-sm-4">{title}</div>
      <div className="col-8 col-sm-4 text-right"></div>
      <div className="col-8 col-sm-2 text-right">{price}</div>
      <div className="col-4 col-sm-2 text-right">
        <button className="btn btn-danger" onClick={remove}>
          X
        </button>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
}

export default CartItem;
