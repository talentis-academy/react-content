import { Link } from "react-router-dom";

// TODO — Replace hardcoded list with Redux state:
//   const favorites = useSelector(state => state.favorites.items)
//   const dispatch = useDispatch()
const favorites = [];

export default function FavoritesPage() {
  if (favorites.length === 0) {
    return (
      <div className="container">
        <h1 className="page-title">My Favorites</h1>
        <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-secondary)" }}>
          <p>No favorites yet. Add some cars from the home page!</p>
          <Link to="/" className="view-btn" style={{ display: "inline-block", marginTop: "1rem", width: "auto", padding: "0.75rem 2rem" }}>
            Browse Cars
          </Link>
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
              <h2 className="car-name">{car.name}</h2>
              {/* TODO — Wire remove button to Redux toggleFavorite */}
              <button className="favorite-btn favorite-active">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>
            <div className="car-info">
              <div className="info-row"><span className="label">Brand:</span><span>{car.brand}</span></div>
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
