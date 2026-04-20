import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { fetchRecipeById } from "../api/fakeRecipesApi";
import { toggleSaved } from "../store/savedSlice";

const diffClass = (d) => ({ Easy: "badge-easy", Medium: "badge-medium", Hard: "badge-hard" }[d] || "");

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const mealPlanSchema = z.object({
  day: z.enum(DAYS, { message: "Please select a day" }),
  servings: z.coerce.number().int().min(1, "At least 1 serving").max(10, "Max 10 servings"),
});

export default function RecipeDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const savedIds = useSelector((s) => s.saved.items.map((r) => r.id));

  const { data: recipe, isLoading } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => fetchRecipeById(id),
  });

  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
    resolver: zodResolver(mealPlanSchema),
    defaultValues: { day: "Monday", servings: 2 },
  });

  const onSubmit = (data) => {
    console.log("Added to meal plan:", { recipe: recipe?.name, ...data });
    reset();
  };

  if (isLoading) return <div className="container"><p>Loading...</p></div>;
  if (!recipe) return <div className="container"><p>Recipe not found.</p></div>;

  const isSaved = savedIds.includes(recipe.id);

  return (
    <div className="container">
      <Link to="/" className="back-link">← Back to Recipes</Link>
      <div className="detail-card">
        <div className="detail-header">
          <h1 className="detail-title">{recipe.emoji} {recipe.name}</h1>
          <button
            className="favorite-btn"
            onClick={() => dispatch(toggleSaved(recipe))}
            style={{ color: isSaved ? "#f43f5e" : undefined }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
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

        {/* Add to Meal Plan form */}
        <div style={{ marginTop: "1.5rem", padding: "1.25rem", background: "var(--bg-primary)", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
          <h3 style={{ marginBottom: "1rem", color: "var(--text-primary)" }}>📅 Add to Meal Plan</h3>
          {isSubmitSuccessful && (
            <p style={{ color: "#4ade80", marginBottom: "0.75rem", fontSize: "0.9rem" }}>✅ Added to meal plan!</p>
          )}
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "flex-end" }}>
            <div className="form-group" style={{ flex: 1, minWidth: "140px" }}>
              <label className="form-label">Day</label>
              <select {...register("day")} className="form-input">
                {DAYS.map((d) => <option key={d}>{d}</option>)}
              </select>
              {errors.day && <p className="form-error">{errors.day.message}</p>}
            </div>
            <div className="form-group" style={{ flex: 1, minWidth: "120px" }}>
              <label className="form-label">Servings</label>
              <input {...register("servings")} type="number" min="1" max="10" className="form-input" />
              {errors.servings && <p className="form-error">{errors.servings.message}</p>}
            </div>
            <button type="submit" className="submit-btn" style={{ alignSelf: "flex-end" }}>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
