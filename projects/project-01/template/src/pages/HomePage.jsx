import { Link } from "react-router-dom";
import { cars } from "../data/cars";

// TODO 1 — Replace static import with React Query:
//   const { data: cars, isLoading, error } = useQuery({ queryKey: ["cars"], queryFn: fetchCars })
// TODO 2 — Import Redux hooks:
//   const dispatch = useDispatch()
//   const favorites = useSelector(state => state.favorites.items)
// TODO 3 — Handle isLoading → show spinner, error → show error message

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="page-title">Car Catalog</h1>
      <div className="car-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="card-header">
              <h2 className="car-name">{car.name}</h2>
              {/* TODO 4 — Wire the favorite button to Redux toggleFavorite action */}
              <button className="favorite-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>
            <div className="car-info">
              <div className="info-row">
                <span className="label">Color:</span>
                <div className="color-indicator" style={{ backgroundColor: car.colorHex }} />
              </div>
              <div className="info-row">
                <span className="label">Status:</span>
                <span className={car.available ? "status-available" : "status-unavailable"}>
                  {car.available ? "Available" : "Unavailable"}
                </span>
              </div>
              <div className="info-row">
                <span className="label">Price:</span>
                <span className="price">{car.price}</span>
              </div>
              <div className="info-row">
                <span className="label">Year:</span>
                <span>{car.year}</span>
              </div>
            </div>
            <Link to={`/car/${car.id}`} className="view-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
