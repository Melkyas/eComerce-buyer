


import React, { useContext, useEffect } from "react";
import { Constants } from "../main/constants";
import { Cloud } from "../main/cloud";
import { AppContext } from "../main/context";
import ShoppingItem from "./ShoppingItem";

function ShopCollection() {
  const { collection, setCollection } = useContext(AppContext);

  useEffect(() => {
    Cloud.post(Constants.API, { action: "ITEM_LIST" }).then((value) => setCollection(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container pt-4 mt-4">
      <div className="row">
        {collection.map((item, index) => (
          <ShoppingItem key={index} item={item}></ShoppingItem>
        ))}
      </div>
    </div>
  );
}

export default ShopCollection;
