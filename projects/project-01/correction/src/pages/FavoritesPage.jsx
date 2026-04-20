import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFavorite } from "../store/favoritesSlice";
import { getColorHex } from "../utils/colorUtils";

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleRemoveFavorite = (car) => {
    dispatch(toggleFavorite(car));
  };

  if (favorites.length === 0) {
    return (
      <div className="container">
        <h1 className="page-title">My Favorites</h1>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p>No favorites yet. Add some cars from the home page!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">My Favorites</h1>
      <div className="car-grid">
        {favorites.map((car) => (
          <div key={car.id} className="car-card">
            <div className="card-header">
              <h2 className="car-name">
                {car.car} {car.car_model}
              </h2>
              <button
                className="favorite-btn favorite-active"
                onClick={() => handleRemoveFavorite(car)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            <div className="car-info">
              <div className="info-row">
                <span className="label">Color:</span>
                <div
                  className="color-indicator"
                  style={{ backgroundColor: getColorHex(car.car_color) }}
                ></div>
              </div>
              <div className="info-row">
                <span className="label">Status:</span>
                <span
                  className={
                    car.availability ? "status-available" : "status-unavailable"
                  }
                >
                  {car.availability ? "Available" : "Unavailable"}
                </span>
              </div>
              <div className="info-row">
                <span className="label">Price:</span>
                <span className="price">{car.price}</span>
              </div>
              <div className="info-row">
                <span className="label">Year:</span>
                <span>{car.car_model_year}</span>
              </div>
            </div>
            <Link to={`/car/${car.id}`} className="view-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
