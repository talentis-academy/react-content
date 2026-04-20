import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import { fetchCars } from "../api/fakeCarsApi";
import { useDebounce } from "../hooks/useDebounce";

export default function HomePage() {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites.items);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const { data: cars = [], isLoading, error } = useQuery({ queryKey: ["cars"], queryFn: fetchCars });

  const filtered = cars.filter((c) =>
    c.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const isFav = (id) => favorites.some((c) => c.id === id);

  if (isLoading) return <div className="container" style={{ textAlign: "center", padding: "4rem" }}><div className="spinner" style={{ margin: "0 auto 1rem" }} /><p>Loading cars...</p></div>;
  if (error) return <div className="container" style={{ textAlign: "center", padding: "4rem", color: "var(--error)" }}><p>Error: {error.message}</p></div>;

  return (
    <div className="container">
      <h1 className="page-title">Car Catalog</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search cars…"
        style={{ width: "100%", maxWidth: "400px", display: "block", margin: "0 auto 2rem", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--bg-card)", color: "var(--text-primary)", fontSize: "1rem" }}
      />
      <div className="car-grid">
        {filtered.map((car) => (
          <div key={car.id} className="car-card">
            <div className="card-header">
              <h2 className="car-name">{car.name}</h2>
              <button className={`favorite-btn ${isFav(car.id) ? "favorite-active" : ""}`} onClick={() => dispatch(toggleFavorite(car))}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill={isFav(car.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>
            <div className="car-info">
              <div className="info-row"><span className="label">Color:</span><div className="color-indicator" style={{ backgroundColor: car.colorHex }} /></div>
              <div className="info-row"><span className="label">Status:</span><span className={car.available ? "status-available" : "status-unavailable"}>{car.available ? "Available" : "Unavailable"}</span></div>
              <div className="info-row"><span className="label">Price:</span><span className="price">{car.price}</span></div>
              <div className="info-row"><span className="label">Year:</span><span>{car.year}</span></div>
            </div>
            <Link to={`/car/${car.id}`} className="view-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
