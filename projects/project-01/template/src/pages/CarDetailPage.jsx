"use client";

import { useParams, Link } from "react-router-dom";

const cars = [
  {
    id: 1,
    name: "Tesla Model S",
    brand: "Tesla",
    color: "Red",
    colorHex: "#e74c3c",
    year: 2024,
    available: true,
    price: "$79,990",
  },
  {
    id: 2,
    name: "BMW i8",
    brand: "BMW",
    color: "Blue",
    colorHex: "#3498db",
    year: 2023,
    available: false,
    price: "$147,500",
  },
  {
    id: 3,
    name: "Audi e-tron",
    brand: "Audi",
    color: "Green",
    colorHex: "#2ecc71",
    year: 2024,
    available: true,
    price: "$65,900",
  },
  {
    id: 4,
    name: "Porsche Taycan",
    brand: "Porsche",
    color: "Orange",
    colorHex: "#f39c12",
    year: 2024,
    available: true,
    price: "$82,700",
  },
  {
    id: 5,
    name: "Mercedes EQS",
    brand: "Mercedes",
    color: "Purple",
    colorHex: "#9b59b6",
    year: 2023,
    available: false,
    price: "$102,310",
  },
  {
    id: 6,
    name: "Lucid Air",
    brand: "Lucid",
    color: "Turquoise",
    colorHex: "#1abc9c",
    year: 2024,
    available: true,
    price: "$77,400",
  },
];

export default function CarDetailPage() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number.parseInt(id));

  if (!car) {
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
          <h1 className="detail-title">{car.name}</h1>
          <button className="favorite-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
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
            <span className="detail-value">{car.brand}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Color</span>
            <div className="color-detail">
              <div
                className="color-indicator"
                style={{ backgroundColor: car.colorHex }}
              ></div>
              <span className="detail-value">{car.color}</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">Year</span>
            <span className="detail-value">{car.year}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Price</span>
            <span className="detail-value price">{car.price}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Availability</span>
            <span
              className={`detail-value ${
                car.available ? "status-available" : "status-unavailable"
              }`}
            >
              {car.available ? "Available" : "Unavailable"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
