import { Link } from "react-router-dom";

const favoriteCars = [
  {
    id: 1,
    name: "Tesla Model S",
    color: "#e74c3c",
    available: true,
    price: "$79,990",
  },
  {
    id: 3,
    name: "Audi e-tron",
    color: "#2ecc71",
    available: true,
    price: "$65,900",
  },
  {
    id: 4,
    name: "Porsche Taycan",
    color: "#f39c12",
    available: true,
    price: "$82,700",
  },
];

export default function FavoritesPage() {
  return (
    <div className="container">
      <h1 className="page-title">My Favorites</h1>
      <div className="car-grid">
        {favoriteCars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="card-header">
              <h2 className="car-name">{car.name}</h2>
              <button className="favorite-btn favorite-active">
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
                  style={{ backgroundColor: car.color }}
                ></div>
              </div>
              <div className="info-row">
                <span className="label">Status:</span>
                <span
                  className={
                    car.available ? "status-available" : "status-unavailable"
                  }
                >
                  {car.available ? "Available" : "Unavailable"}
                </span>
              </div>
              <div className="info-row">
                <span className="label">Price:</span>
                <span className="price">{car.price}</span>
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
