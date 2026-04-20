import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { toggleWatchlist } from "../store/watchlistSlice";
import { fetchMovieById } from "../api/fakeMoviesApi";

export default function MovieDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const watchlist = useSelector((s) => s.watchlist.items);
  const { data: movie, isLoading } = useQuery({ queryKey: ["movie", id], queryFn: () => fetchMovieById(id) });
  const inList = movie ? watchlist.some((m) => m.id === movie.id) : false;

  if (isLoading) return <div className="container" style={{ textAlign: "center", padding: "4rem" }}><div className="spinner" style={{ margin: "0 auto" }} /></div>;
  if (!movie) return <div className="container"><p>Movie not found</p></div>;

  return (
    <div className="container">
      <Link to="/" className="back-link">← Back to Movies</Link>
      <div className="detail-card">
        <div className="detail-header">
          <h1 className="detail-title">{movie.emoji} {movie.title}</h1>
          <button className={`favorite-btn ${inList ? "favorite-active" : ""}`} onClick={() => dispatch(toggleWatchlist(movie))}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill={inList ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
        <div className="detail-grid">
          {[["Director", movie.director], ["Genre", movie.genre], ["Year", movie.year]].map(([l, v]) => (
            <div key={l} className="detail-item"><span className="detail-label">{l}</span><span className="detail-value">{v}</span></div>
          ))}
          <div className="detail-item"><span className="detail-label">Rating</span><span className="detail-value stars">{"★".repeat(movie.rating)}{"☆".repeat(5 - movie.rating)}</span></div>
        </div>
      </div>
    </div>
  );
}
