import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import recipes from "../data/recipes";
import { Link } from "react-router-dom";
import {
  getFavorites,
  subscribeFavorites,
  toggleFavorite,
} from "../utils/favorites";

const Favorites = () => {
  const [favs, setFavs] = useState(getFavorites());

  useEffect(() => {
    const unsub = subscribeFavorites((ids) => setFavs(ids));
    return unsub;
  }, []);

  const favRecipes = recipes.filter((r) => favs.includes(r.id));

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-wrap justify-center gap-8 m-10">
          {favRecipes.length === 0 && (
            <div className="text-center text-lg mb-50">No favorites yet.</div>
          )}
          {favRecipes.map((r) => {
            const fav = favs.includes(r.id);
            return (
              <div
                key={r.id}
                className="card bg-base-100 image-full w-96 shadow-sm"
              >
                <figure className="h-56">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mb-2">{r.title}</h2>
                  <p>
                  {r.difficulty} | {r.cookingTime}{" "}
                </p>
                  <div className="card-actions justify-end">
                    <button
                      className={`btn btn-circle ${fav ? "text-red-500" : ""}`}
                      onClick={() => {
                        toggleFavorite(r.id);
                        setFavs(getFavorites());
                      }}
                      aria-label={fav ? "Unfavorite" : "Favorite"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path
                          fill={fav ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    </button>
                    <Link to={`/recipes/${r.id}`} className="btn btn-primary">
                      View Recipe
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
			<div className="m-40"/>
      <Footer />
    </div>
  );
};

export default Favorites;
