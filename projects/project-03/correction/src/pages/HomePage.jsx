import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../api/fakeRecipesApi";
import { toggleSaved } from "../store/savedSlice";
import { useDebounce } from "../hooks/useDebounce";

const diffClass = (d) => ({ Easy: "badge-easy", Medium: "badge-medium", Hard: "badge-hard" }[d] || "");

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("All");
  const debouncedSearch = useDebounce(search, 300);

  const { data: recipes = [], isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
  });

  const savedIds = useSelector((s) => s.saved.items.map((r) => r.id));
  const dispatch = useDispatch();

  const cuisines = ["All", ...new Set(recipes.map((r) => r.cuisine))];

  const filtered = recipes.filter((r) => {
    const matchSearch = r.name.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchCuisine = cuisine === "All" || r.cuisine === cuisine;
    return matchSearch && matchCuisine;
  });

  if (isLoading) return <div className="container"><p>Loading recipes...</p></div>;

  return (
    <div className="container">
      <h1 className="page-title">🍳 Recipe Book</h1>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <input
          className="search-input"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="filter-select"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        >
          {cuisines.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      {filtered.length === 0 && <p style={{ color: "var(--text-secondary)" }}>No recipes found.</p>}

      <div className="recipe-grid">
        {filtered.map((r) => {
          const isSaved = savedIds.includes(r.id);
          return (
            <div key={r.id} className="recipe-card">
              <div className="recipe-emoji">{r.emoji}</div>
              <div className="card-header">
                <h2 className="recipe-title">{r.name}</h2>
                <button
                  className="favorite-btn"
                  onClick={() => dispatch(toggleSaved(r))}
                  style={{ color: isSaved ? "#f43f5e" : undefined }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
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
          );
        })}
      </div>
    </div>
  );
}
