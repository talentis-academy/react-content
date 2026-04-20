import { Link } from "react-router-dom";
import { movies } from "../data/movies";

// TODO 1 — Use React Query: useQuery({ queryKey: ["movies"], queryFn: fetchMovies })
// TODO 2 — Add Redux: useSelector + useDispatch for watchlist
// TODO 3 — Add debounced search with custom useDebounce hook

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="page-title">🎬 Movie Hub</h1>
      {/* TODO — Add search input */}
      <div className="item-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="item-card">
            <div className="item-emoji">{movie.emoji}</div>
            <div className="card-header">
              <h2 className="item-title">{movie.title}</h2>
              {/* TODO — Wire to Redux watchlist */}
              <button className="favorite-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>
            <p className="item-meta">{movie.director} · {movie.year}</p>
            <p className="item-meta">{movie.genre}</p>
            <div className="stars">{"★".repeat(movie.rating)}{"☆".repeat(5 - movie.rating)}</div>
            <Link to={`/movie/${movie.id}`} className="view-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
