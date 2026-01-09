import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <Navbar />

      <main className="flex-1 p-10 space-y-4">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg text-base-content/80">
          Welcome to JustRecipe, where great food meets thoughtful design. We
          believe that food is more than just a meal — it’s an experience. Our
          goal is to make discovering, exploring, and enjoying delicious dishes
          simple, engaging, and accessible for everyone.
        </p>
        <h1 className="text-2xl font-bold">What We Offer</h1>
        <p className="text-lg text-base-content/80">
          <ul>
            <li>- A carefully curated menu with clear categories</li>
            <li>- Detailed dish information to help you choose confidently</li>
            <li>- A clean, intuitive interface that’s easy to navigate</li>
            <li>- A seamless experience across all devices</li>
          </ul>
        </p>

        <h1 className="text-2xl font-bold">Our Philosophy</h1>
        <p className="text-lg text-base-content/80">
          We believe in quality over quantity. We strive to provide the best recipes with complete transparency in ingredients for you to cook the best tasting dishes. We also try to respect and include diverse tastes and preferences by providing you recipes from various cuisines.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
