import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import AboutUs from "./components/aboutus";
import Recipes from "./components/recipes";
import RecipeDetail from "./components/RecipeDetail";
import Favorites from "./components/favorites";
import AllRecipe from "./components/allRecipes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cuisines" element={<Recipes />} />
        <Route path="/recipes" element={<AllRecipe />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
