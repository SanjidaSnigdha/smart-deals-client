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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
