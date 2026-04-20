import { useParams, Link } from "react-router-dom";
import { cars } from "../data/cars";

// TODO 1 — Replace static import with React Query:
//   const { data: car, isLoading } = useQuery({ queryKey: ["car", id], queryFn: () => fetchCarById(id) })
// TODO 2 — Wire favorite button to Redux (useSelector + useDispatch)

export default function CarDetailPage() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));

  if (!car) return <div className="container"><p>Car not found</p></div>;

  return (
    <div className="container">
      <Link to="/" className="back-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Catalog
      </Link>
      <div className="detail-card">
        <div className="detail-header">
          <h1 className="detail-title">{car.name}</h1>
          {/* TODO 2 — Wire this button to Redux */}
          <button className="favorite-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
        <div className="detail-grid">
          {[
            ["Brand", car.brand],
            ["Year", car.year],
            ["Price", car.price],
            ["Status", car.available ? "Available" : "Unavailable"],
          ].map(([label, value]) => (
            <div key={label} className="detail-item">
              <span className="detail-label">{label}</span>
              <span className={`detail-value${label === "Status" ? (car.available ? " status-available" : " status-unavailable") : ""}`}>{value}</span>
            </div>
          ))}
          <div className="detail-item">
            <span className="detail-label">Color</span>
            <div className="color-detail">
              <div className="color-indicator" style={{ backgroundColor: car.colorHex }} />
              <span className="detail-value">{car.color}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
