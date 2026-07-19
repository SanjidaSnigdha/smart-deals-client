import React, { use } from "react";
import Product from "../Product/Product";

const LatestProducts = ({ latestProductsPromise }) => {
  const products = use(latestProductsPromise);
  console.log(products);
  return (
    <div>
      <h2 className="text-5xl">
        Recent{" "}
        <span className="text-primary font-inter font-bold text-center">
          Products
        </span>
      </h2>
      <div className="grid grid-col">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
