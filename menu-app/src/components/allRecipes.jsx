import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import recipes from "../data/recipes";
import {
  getFavorites,
  toggleFavorite,
  subscribeFavorites,
} from "../utils/favorites";
import Navbar from "./navbar";
import Footer from "./footer";

const AllRecipe = () => {
  const items = recipes;
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") || "").trim().toLowerCase();

  const [filters, setFilters] = useState({
    veg: false,
    nonveg: false,
    breakfast: false,
    snacks: false,
    dessert: false,
    highProtein: false,
  });

  const toggleFilter = (key) => setFilters((s) => ({ ...s, [key]: !s[key] }));
  const clearFilters = () =>
    setFilters({
      veg: false,
      nonveg: false,
      breakfast: false,
      snacks: false,
      dessert: false,
      highProtein: false,
    });

  const filteredByQuery = items.filter((r) => {
    if (!q) return true;
    const inTitle = r.title?.toLowerCase().includes(q);
    const inCuisine = r.cuisine?.toLowerCase().includes(q);
    const inIngredients = (r.ingredients || []).some((ing) =>
      String(ing).toLowerCase().includes(q)
    );
    const inTags = (r.tags || []).some((t) =>
      String(t).toLowerCase().includes(q)
    );
    return inTitle || inCuisine || inIngredients || inTags;
  });

  const filtered = filteredByQuery.filter((r) => {
    const vegSelected = filters.veg;
    const nonvegSelected = filters.nonveg;
    if (vegSelected && !nonvegSelected && !r.veg) return false;
    if (nonvegSelected && !vegSelected && r.veg) return false;

    const selectedTags = [];
    if (filters.breakfast) selectedTags.push("breakfast");
    if (filters.snacks) selectedTags.push("snacks");
    if (filters.dessert) selectedTags.push("dessert");
    if (filters.highProtein) selectedTags.push("high protein");

    if (selectedTags.length > 0) {
      const recipeTags = (r.tags || []).map((t) => String(t).toLowerCase());
      const anyMatch = selectedTags.some((tag) => recipeTags.includes(tag));
      if (!anyMatch) return false;
    }

    return true;
  });
  const RECIPES_PER_PAGE = 9;
  const [page, setPage] = useState(1);

  // reset page when query or filters change
  useEffect(() => {
    setPage(1);
  }, [q, JSON.stringify(filters)]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / RECIPES_PER_PAGE));
  const start = (page - 1) * RECIPES_PER_PAGE;
  const visible = filtered.slice(start, start + RECIPES_PER_PAGE);
  const [favs, setFavs] = useState(getFavorites());

  useEffect(() => {
    const unsub = subscribeFavorites((ids) => setFavs(ids));
    return unsub;
  }, []);

  const onToggle = (id) => {
    toggleFavorite(id);
    setFavs(getFavorites());
  };

  return (
    <div>
      <Navbar />

      <div className="text-3xl m-10 flex justify-center"> All Recipes </div>
      {q ? (
        <div className="text-center text-sm text-base-content/70 mb-4">
          Results for "{q}"
        </div>
      ) : null}

      <form
        className="flex flex-wrap justify-center items-center gap-3 mb-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="checkbox"
          className="btn"
          aria-label="Veg"
          checked={filters.veg}
          onChange={() => toggleFilter("veg")}
        />

        <input
          type="checkbox"
          className="btn"
          aria-label="Non-Veg"
          checked={filters.nonveg}
          onChange={() => toggleFilter("nonveg")}
        />

        <input
          type="checkbox"
          className="btn"
          aria-label="Breakfast"
          checked={filters.breakfast}
          onChange={() => toggleFilter("breakfast")}
        />

        <input
          type="checkbox"
          className="btn"
          aria-label="Snacks"
          checked={filters.snacks}
          onChange={() => toggleFilter("snacks")}
        />

        <input
          type="checkbox"
          className="btn"
          aria-label="Dessert"
          checked={filters.dessert}
          onChange={() => toggleFilter("dessert")}
        />

        <input
          type="checkbox"
          className="btn"
          aria-label="High Protein"
          checked={filters.highProtein}
          onChange={() => toggleFilter("highProtein")}
        />

        {/* Clear Button */}
        <button
          type="button"
          className="btn btn-square btn-ghost"
          onClick={clearFilters}
          aria-label="Clear filters"
        >
          ×
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-8 m-10">
        {visible.map((r) => {
          const fav = favs.includes(r.id);
          return (
            <div
              key={r.id}
              className="card bg-base-100 image-full w-96 shadow-sm"
            >
              <figure className="h-60">
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
                    onClick={() => onToggle(r.id)}
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
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-center gap-2">
          <button
            className={`btn btn-sm ${page === 1 ? "btn-disabled" : ""}`}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            aria-label="Previous page"
          >
            Prev
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`btn btn-sm ${
                  p === page ? "btn-primary" : "btn-ghost"
                }`}
                onClick={() => setPage(p)}
                aria-label={`Page ${p}`}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            className={`btn btn-sm ${
              page === totalPages ? "btn-disabled" : ""
            }`}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      </div>
      <div className="mb-20"></div>
      <Footer />
    </div>
  );
};

export default AllRecipe;
