import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import { fetchCarById } from "../api/fakeCarsApi";

export default function CarDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites.items);
  const { data: car, isLoading } = useQuery({ queryKey: ["car", id], queryFn: () => fetchCarById(id) });
  const isFav = car ? favorites.some((c) => c.id === car.id) : false;

  if (isLoading) return <div className="container" style={{ textAlign: "center", padding: "4rem" }}><div className="spinner" style={{ margin: "0 auto" }} /></div>;
  if (!car) return <div className="container"><p>Car not found</p></div>;

  return (
    <div className="container">
      <Link to="/" className="back-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        Back to Catalog
      </Link>
      <div className="detail-card">
        <div className="detail-header">
          <h1 className="detail-title">{car.name}</h1>
          <button className={`favorite-btn ${isFav ? "favorite-active" : ""}`} onClick={() => dispatch(toggleFavorite(car))}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill={isFav ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
        <div className="detail-grid">
          {[["Brand", car.brand], ["Year", car.year], ["Price", car.price]].map(([l, v]) => (
            <div key={l} className="detail-item"><span className="detail-label">{l}</span><span className="detail-value">{v}</span></div>
          ))}
          <div className="detail-item"><span className="detail-label">Color</span><div className="color-detail"><div className="color-indicator" style={{ backgroundColor: car.colorHex }} /><span className="detail-value">{car.color}</span></div></div>
          <div className="detail-item"><span className="detail-label">Status</span><span className={`detail-value ${car.available ? "status-available" : "status-unavailable"}`}>{car.available ? "Available" : "Unavailable"}</span></div>
        </div>
      </div>
    </div>
  );
}
