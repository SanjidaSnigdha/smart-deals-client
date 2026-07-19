import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { title, price_min, price_max, image } = product;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-4 pt-4">
        <img src={image} alt="products" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-inter font-medium text-[#001931] text-2xl">{title}</h2>
        <p className="text-primary font-inter font-semibold">
          Price : $ {price_min} - {price_max}
        </p>
        <div className="card-actions">
          <Link to= {} className="btn btn-primary w-full">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
