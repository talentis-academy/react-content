"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarById } from "../api/actions";
import { toggleFavorite } from "../store/favoritesSlice";
import { getColorHex } from "../utils/colorUtils";

export default function CarDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const { data, isLoading, error } = useQuery({
    queryKey: ["car"],
    queryFn: () => fetchCarById(id),
  });

  const car = data?.Car;
  const isFavorite = car ? favorites.some((fav) => fav.id === car.id) : false;

  const handleToggleFavorite = () => {
    if (car) {
      dispatch(toggleFavorite(car));
    }
  };

  if (isLoading) {
    return (
      <div className="container">
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
          <p>Loading car details...</p>
        </div>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="container">
        <p>Car not found</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/" className="back-link">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Catalog
      </Link>

      <div className="detail-card">
        <div className="detail-header">
          <h1 className="detail-title">
            {car.car} {car.car_model}
          </h1>
          <button
            className={`favorite-btn ${isFavorite ? "favorite-active" : ""}`}
            onClick={handleToggleFavorite}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isFavorite ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div className="detail-grid">
          <div className="detail-item">
            <span className="detail-label">Brand</span>
            <span className="detail-value">{car.car}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Model</span>
            <span className="detail-value">{car.car_model}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Color</span>
            <div className="color-detail">
              <div
                className="color-indicator"
                style={{ backgroundColor: getColorHex(car.car_color) }}
              ></div>
              <span className="detail-value">{car.car_color}</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">Year</span>
            <span className="detail-value">{car.car_model_year}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">VIN</span>
            <span className="detail-value">{car.car_vin}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Price</span>
            <span className="detail-value price">{car.price}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Availability</span>
            <span
              className={`detail-value ${
                car.availability ? "status-available" : "status-unavailable"
              }`}
            >
              {car.availability ? "Available" : "Unavailable"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
