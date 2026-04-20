import { Link } from "react-router-dom";
// TODO — Replace with: const watchlist = useSelector(state => state.watchlist.items)
const watchlist = [];
export default function WatchlistPage() {
  if (!watchlist.length) return (
    <div className="container">
      <h1 className="page-title">My Watchlist</h1>
      <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-secondary)" }}>
        <p>Your watchlist is empty. Add movies from the home page!</p>
        <Link to="/" className="view-btn" style={{ display: "inline-block", marginTop: "1rem", width: "auto", padding: "0.75rem 2rem" }}>Browse Movies</Link>
      </div>
    </div>
  );
  return (
    <div className="container">
      <h1 className="page-title">My Watchlist</h1>
      <div className="item-grid">
        {watchlist.map((m) => (
          <div key={m.id} className="item-card">
            <div className="item-emoji">{m.emoji}</div>
            <h2 className="item-title">{m.title}</h2>
            <p className="item-meta">{m.year} · {m.genre}</p>
            <Link to={`/movie/${m.id}`} className="view-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
