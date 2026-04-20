import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container" style={{ textAlign: "center", paddingTop: "4rem" }}>
      <p style={{ fontSize: "4rem" }}>🍳</p>
      <h1 className="not-found-title">404 — Page Not Found</h1>
      <p className="not-found-text">This recipe doesn't exist.</p>
      <Link to="/" className="not-found-btn">Back to Recipes</Link>
    </div>
  );
}
