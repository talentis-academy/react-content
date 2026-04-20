import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import { fetchCarsByYear } from "../api/actions";
import { getColorHex } from "../utils/colorUtils";

export default function HomePage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const { data, isLoading, error } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const result = await fetchCarsByYear(2012);
      return result;
    },
  });

  console.log(
    "HomePage render - isLoading:",
    isLoading,
    "error:",
    error,
    "data:",
    data
  );

  const handleToggleFavorite = (car) => {
    dispatch(toggleFavorite(car));
  };

  const isFavorite = (carId) => {
    return favorites.some((car) => car.id === carId);
  };

  if (isLoading) {
    return (
      <div className="container">
        <h1 className="page-title">Car Catalog</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            minHeight: "50vh",
          }}
        >
          <div className="spinner" style={{ marginBottom: "1rem" }}></div>
          <p>Loading cars...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <h1 className="page-title">Car Catalog</h1>
        <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
          <p>Error loading cars: {error.message}</p>
        </div>
      </div>
    );
  }

  const cars = (data?.Cars || []).slice(0, 6);

  return (
    <div className="container">
      <h1 className="page-title">Car Catalog</h1>
      <div className="car-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="card-header">
              <h2 className="car-name">
                {car.car} {car.car_model}
              </h2>
              <button
                className={`favorite-btn ${
                  isFavorite(car.id) ? "favorite-active" : ""
                }`}
                onClick={() => handleToggleFavorite(car)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={isFavorite(car.id) ? "currentColor" : "none"}
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
