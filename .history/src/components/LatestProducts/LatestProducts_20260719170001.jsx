import React, { use } from "react";

const LatestProducts = ({ latestProductsPromise }) => {
  const products = use(latestProductsPromise);
  console.log(products);
  return <div>
    {
        products.map(product=> <Pro)
    }
  </div>;
};

export default LatestProducts;
