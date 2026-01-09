import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../data/recipes";
import Navbar from "./navbar";
import Footer from "./footer";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold">Recipe not found</h2>
        <Link to="/recipes" className="link">
          Back to recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="container mx-auto p-8">
        <Link to="/recipes" className="link mb-4 inline-block">
          ← Back
        </Link>
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        <div className="flex ">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full max-w-2xl h-64 object-cover rounded-md mb-6 mr-20"
          />
          <div>
            <h2 className="text-2xl font-semibold">Recipe Cooking Time: {recipe.cookingTime}</h2>
            <h2 className="mt-10 text-2xl font-semibold">Recipe Difficuly: {recipe.difficulty}</h2>

            <h3 className="text-2xl font-semibold mb-2 mt-10">Recipe Video Link</h3>

            <a
              href={recipe.video}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              Click Here
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-2 mt-2">Ingredients</h3>
        <ul className="list-disc ml-6 mb-6">
          {recipe.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold mb-2">Steps</h3>
        <ol className="list-decimal ml-6">
          {recipe.steps.map((s, i) => (
            <li key={i} className="mb-2">
              {s}
            </li>
          ))}
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default RecipeDetail;
