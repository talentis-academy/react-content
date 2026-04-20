import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { toggleWatchlist } from "../store/watchlistSlice";
import { fetchMovies } from "../api/fakeMoviesApi";
import { useDebounce } from "../hooks/useDebounce";

export default function HomePage() {
  const dispatch = useDispatch();
  const watchlist = useSelector((s) => s.watchlist.items);
  const [search, setSearch] = useState("");
  const q = useDebounce(search, 300);
  const { data: movies = [], isLoading } = useQuery({ queryKey: ["movies"], queryFn: fetchMovies });
  const filtered = movies.filter((m) => m.title.toLowerCase().includes(q.toLowerCase()));
  const inList = (id) => watchlist.some((m) => m.id === id);

  if (isLoading) return <div className="container" style={{ textAlign: "center", padding: "4rem" }}><div className="spinner" style={{ margin: "0 auto" }} /></div>;

  return (
    <div className="container">
      <h1 className="page-title">🎬 Movie Hub</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search movies…"
        style={{ width: "100%", maxWidth: "400px", display: "block", margin: "0 auto 2rem", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid var(--border)", backgroundColor: "var(--bg-card)", color: "var(--text-primary)", fontSize: "1rem" }} />
      <div className="item-grid">
        {filtered.map((movie) => (
          <div key={movie.id} className="item-card">
            <div className="item-emoji">{movie.emoji}</div>
            <div className="card-header">
              <h2 className="item-title">{movie.title}</h2>
              <button className={`favorite-btn ${inList(movie.id) ? "favorite-active" : ""}`} onClick={() => dispatch(toggleWatchlist(movie))}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill={inList(movie.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
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
