import React, { use } from "react";
import Product from "../Product/Product";

const LatestProducts = ({ latestProductsPromise }) => {
  const products = use(latestProductsPromise);
  console.log(products);
  return (
    <div>
      
    </div>
  );
};

export default LatestProducts;
