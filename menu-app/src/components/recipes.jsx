import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Italian from "./Cuisines/italian";
import Chinese from "./Cuisines/chinese";
import NorthIndian from "./Cuisines/northIndian";
import SouthIndian from "./Cuisines/southIndian";
import Thai from "./Cuisines/thai";
import Mexican from "./Cuisines/mexican";
import Japanese from "./Cuisines/japanese";

const Recipes = () => {
  return (
    <div>
      <Navbar />
      <div className="text-3xl m-10 flex justify-center"> Explore by Cuisines </div>
      <div className="tabs tabs-lift flex justify-center mt-5">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab  text-2xl"
          aria-label="Chinese"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Chinese />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-2xl"
          aria-label="Italian"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Italian />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab  text-2xl"
          aria-label="North Indian"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <NorthIndian />
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab  text-2xl"
          aria-label="Thai"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Thai />
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab  text-2xl"
          aria-label="South Indian"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <SouthIndian />
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab  text-2xl"
          aria-label="Japanese"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Japanese />
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-2xl"
          aria-label="Mexican"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Mexican />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recipes;
