import React from "react";
import Italian from "../assets/Cuisines/Italian.jpg";
import Chinese from "../assets/Cuisines/Chinese.jpg";
import Thai from "../assets/Cuisines/Thai.jpg";
import NorthIndian from "../assets/Cuisines/NorthIndian.jpg";
import Japanese from "../assets/Cuisines/Japanese.jpg";
import SouthIndian from "../assets/Cuisines/South Indian.jpg";
import Mexican from "../assets/Cuisines/Mexican.jpg";

const Categories = () => {
  return (
    <div>
      <div className="carousel carousel-center bg-neutral rounded-box max-w-350 space-x-4 p-4 mt-10 mb-20">
        <div className="carousel-item">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={Italian}
                alt="Italian cuisine"
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Italian</h2>
              <p>
                A celebration of simplicity and quality, featuring sun-ripened
                tomatoes, fresh herbs, and the comforting textures of handmade
                pasta and dough.
              </p>

              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Explore</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={Chinese}
                alt="Chinese cuisine"
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Chinese</h2>
              <p>
                A masterclass in balance, blending sweet, sour, salty, and umami
                notes through high-heat stir-fries and delicate steamed
                specialties.
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Explore</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={Thai}
                alt="Thai cuisine"
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Thai</h2>
              <p>
                An aromatic explosion of fragrant lemongrass, creamy coconut,
                and fiery bird’s eye chilies that awaken every taste bud.
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Explore</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={NorthIndian}
                alt="North Indian cuisine"
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">North Indian</h2>
              <p>
                Indulge in the velvety textures of slow-simmered gravies,
                enriched with butter, cream, and a signature blend of warm,
                aromatic spices.
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Explore</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={Japanese}
                alt="Japanese cuisine"
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Japanese</h2>
              <p>
                Elegance on a plate, focusing on seasonal freshness, precision,
                and clean flavors that highlight the natural beauty of every
                ingredient.
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Explore</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={SouthIndian}
                alt="South Indian cuisine"
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">South Indian</h2>
              <p>
                A celebration of tradition featuring light, airy textures and
                naturally tangy flavors that are as wholesome as they are
                delicious.
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Explore</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={Mexican}
                alt="Mexican cuisine"
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Mexican</h2>
              <p>
                Vibrant and bold flavors defined by a perfect balance of smoky
                chilies, zesty citrus, and the warmth of fresh corn tortillas.
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Explore</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
