import { useParams, Link } from "react-router-dom";
import { recipes } from "../data/recipes";
// TODO — Replace with React Query + Redux

const diffClass = (d) => ({ Easy: "badge-easy", Medium: "badge-medium", Hard: "badge-hard" }[d] || "");

export default function RecipeDetailPage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));
  if (!recipe) return <div className="container"><p>Recipe not found</p></div>;
  return (
    <div className="container">
      <Link to="/" className="back-link">← Back to Recipes</Link>
      <div className="detail-card">
        <div className="detail-header">
          <h1 className="detail-title">{recipe.emoji} {recipe.name}</h1>
          {/* TODO — Wire save button */}
          <button className="favorite-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
        <div className="detail-grid">
          {[["Chef", recipe.chef], ["Cuisine", recipe.cuisine], ["Prep Time", recipe.prepTime]].map(([l, v]) => (
            <div key={l} className="detail-item"><span className="detail-label">{l}</span><span className="detail-value">{v}</span></div>
          ))}
          <div className="detail-item">
            <span className="detail-label">Difficulty</span>
            <span className={`badge ${diffClass(recipe.difficulty)}`}>{recipe.difficulty}</span>
          </div>
          <div className="detail-item" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
            <span className="detail-label">Description</span>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{recipe.description}</p>
          </div>
        </div>
        {/* TODO — Add RHF + Zod form to add recipe to meal plan */}
        <div style={{ marginTop: "1.5rem", padding: "1rem", background: "var(--bg-primary)", borderRadius: "0.5rem", color: "var(--text-secondary)", fontSize: "0.875rem" }}>
          💡 <strong>TODO:</strong> Add a "Add to Meal Plan" form below using react-hook-form + Zod validation (day of week + servings)
        </div>
      </div>
    </div>
  );
}
