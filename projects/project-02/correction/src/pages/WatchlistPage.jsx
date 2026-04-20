import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleWatchlist } from "../store/watchlistSlice";

export default function WatchlistPage() {
  const dispatch = useDispatch();
  const watchlist = useSelector((s) => s.watchlist.items);

  if (!watchlist.length) return (
    <div className="container">
      <h1 className="page-title">My Watchlist</h1>
      <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-secondary)" }}>
        <p>Your watchlist is empty!</p>
        <Link to="/" className="view-btn" style={{ display: "inline-block", marginTop: "1rem", width: "auto", padding: "0.75rem 2rem" }}>Browse Movies</Link>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1 className="page-title">My Watchlist ({watchlist.length})</h1>
      <div className="item-grid">
        {watchlist.map((m) => (
          <div key={m.id} className="item-card">
            <div className="item-emoji">{m.emoji}</div>
            <div className="card-header">
              <h2 className="item-title">{m.title}</h2>
              <button className="favorite-btn favorite-active" onClick={() => dispatch(toggleWatchlist(m))}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>
            <p className="item-meta">{m.year} · {m.genre}</p>
            <div className="stars">{"★".repeat(m.rating)}</div>
            <Link to={`/movie/${m.id}`} className="view-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
