import { Link } from "react-router-dom";
import { recipes } from "../data/recipes";

// TODO 1 — Use React Query: useQuery({ queryKey: ["recipes"], queryFn: fetchRecipes })
// TODO 2 — Add Redux: useSelector + useDispatch for saved recipes
// TODO 3 — Add filter by cuisine + debounced search

const diffClass = (d) => ({ Easy: "badge-easy", Medium: "badge-medium", Hard: "badge-hard" }[d] || "");

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="page-title">🍳 Recipe Book</h1>
      {/* TODO — Search + filter inputs */}
      <div className="recipe-grid">
        {recipes.map((r) => (
          <div key={r.id} className="recipe-card">
            <div className="recipe-emoji">{r.emoji}</div>
            <div className="card-header">
              <h2 className="recipe-title">{r.name}</h2>
              {/* TODO — Wire to Redux saved recipes */}
              <button className="favorite-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
