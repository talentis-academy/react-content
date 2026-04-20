import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSaved } from "../store/savedSlice";

const diffClass = (d) => ({ Easy: "badge-easy", Medium: "badge-medium", Hard: "badge-hard" }[d] || "");

export default function SavedPage() {
  const saved = useSelector((s) => s.saved.items);
  const dispatch = useDispatch();

  if (saved.length === 0) {
    return (
      <div className="container">
        <h1 className="page-title">❤️ Saved Recipes</h1>
        <p style={{ color: "var(--text-secondary)" }}>No saved recipes yet. Browse recipes and click the ❤️ to save them!</p>
        <Link to="/" className="view-btn" style={{ display: "inline-block", marginTop: "1rem" }}>Browse Recipes</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">❤️ Saved Recipes ({saved.length})</h1>
      <div className="recipe-grid">
        {saved.map((r) => (
          <div key={r.id} className="recipe-card">
            <div className="recipe-emoji">{r.emoji}</div>
            <div className="card-header">
              <h2 className="recipe-title">{r.name}</h2>
              <button
                className="favorite-btn"
                onClick={() => dispatch(toggleSaved(r))}
                style={{ color: "#f43f5e" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>
            <div className="badge-row">
              <span className={`badge ${diffClass(r.difficulty)}`}>{r.difficulty}</span>
              <span className="badge" style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}>{r.cuisine}</span>
              <span className="badge" style={{ background: "rgba(148,163,184,0.1)", color: "var(--text-secondary)" }}>⏱ {r.prepTime}</span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{r.description}</p>
            <Link to={`/recipe/${r.id}`} className="view-btn">View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
