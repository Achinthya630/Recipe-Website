import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import homeBg from "../assets/HomePageBG.jpg";
import Categories from "./categories";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <Navbar />

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${homeBg})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl font-bold">Hungry?</h1>
            <p className="mb-5">
              Feel free to explore to find the best recipes to cook right now.
            </p>
            <Link to={"/recipes"} className="btn btn-success">
              Checkout Recipes
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 text-4xl">
        Explore by Cuisines
      </div>
      <p className="my-5 flex justify-center">
        Explore a large collection of recipes by cuisines to find out what you
        exactly feel like eating right now.
      </p>
      <div className="flex justify-center">
        <div className="flex-1"></div>
        <Link to={"/cuisines"} className="btn btn-success">
          Click Here
        </Link>
        <div className="flex-1"></div>
      </div>
      <div className="flex justify-center">
        <Categories />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
