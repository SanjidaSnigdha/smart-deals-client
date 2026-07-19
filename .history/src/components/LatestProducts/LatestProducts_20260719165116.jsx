import React from "react";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products",
).then((res) => res.json());
const LatestProducts = () => {
  return <div>
    <Latest
  </div>;
};

export default LatestProducts;
