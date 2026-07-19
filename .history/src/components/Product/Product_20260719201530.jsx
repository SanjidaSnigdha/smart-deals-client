import React from "react";

const Product = ({ product }) => {
  const { title, price_min, price_max, image } = product;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-4 pt-4">
        <img src={image} alt="products" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-inter font-medium text-[#001931] text-">{title}</h2>
        <p className="text-primary font-inter font-semibold">
          Price : $ {price_min} - {price_max}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
