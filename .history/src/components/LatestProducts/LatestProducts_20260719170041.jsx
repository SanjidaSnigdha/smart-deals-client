import React, { use } from "react";
import Product from "../Product/Product";

const LatestProducts = ({ latestProductsPromise }) => {
  const products = use(latestProductsPromise);
  console.log(products);
  return <div>
    {
        products.map(product=> <Product key=></Product>)
    }
  </div>;
};

export default LatestProducts;
