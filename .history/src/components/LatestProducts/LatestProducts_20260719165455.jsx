import React, { use } from "react";

const LatestProducts = ({latestProductsPromise}) => {
    const products = use(latestProductsPromise);
    
  return <div></div>;
};

export default LatestProducts;
