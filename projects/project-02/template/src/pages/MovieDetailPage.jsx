import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";

// TODO — Replace with React Query + Redux (same pattern as HomePage)

export default function MovieDetailPage() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));
  if (!movie) return <div className="container"><p>Movie not found</p></div>;
  return (
    <div className="container">
      <Link to="/" className="back-link">← Back to Movies</Link>
      <div className="detail-card">
        <div className="detail-header">
          <h1 className="detail-title">{movie.emoji} {movie.title}</h1>
          {/* TODO — Wire favorite button */}
          <button className="favorite-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
        <div className="detail-grid">
          {[["Director", movie.director], ["Genre", movie.genre], ["Year", movie.year]].map(([l, v]) => (
            <div key={l} className="detail-item"><span className="detail-label">{l}</span><span className="detail-value">{v}</span></div>
          ))}
          <div className="detail-item"><span className="detail-label">Rating</span><span className="detail-value stars">{"★".repeat(movie.rating)}</span></div>
        </div>
      </div>
    </div>
  );
}
