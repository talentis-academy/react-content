import { Link } from "react-router-dom";
// TODO — Replace with: const saved = useSelector(state => state.saved.items)
const saved = [];
export default function SavedPage() {
  if (!saved.length) return (
    <div className="container"><h1 className="page-title">Saved Recipes</h1>
      <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-secondary)" }}>
        <p>No saved recipes yet!</p>
        <Link to="/" className="view-btn" style={{ display: "inline-block", marginTop: "1rem", width: "auto", padding: "0.75rem 2rem" }}>Browse Recipes</Link>
      </div>
    </div>
  );
  return <div className="container"><h1 className="page-title">Saved Recipes</h1><div className="recipe-grid">{saved.map(r => <div key={r.id} className="recipe-card"><div className="recipe-emoji">{r.emoji}</div><h2 className="recipe-title">{r.name}</h2><Link to={`/recipe/${r.id}`} className="view-btn">View Recipe</Link></div>)}</div></div>;
}
