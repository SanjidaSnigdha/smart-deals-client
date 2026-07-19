import React from "react";
import Banner from "../Banner/Banner";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products",
).then((res) => res.json());
const Home = () => {
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
