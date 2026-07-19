import React, { use } from "react";
import Product from "../Product/Product";

const LatestProducts = ({ latestProductsPromise }) => {
  const products = use(latestProductsPromise);
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <Product key={product._id} product={pro}></Product>
      ))}
    </div>
  );
};

export default LatestProducts;
