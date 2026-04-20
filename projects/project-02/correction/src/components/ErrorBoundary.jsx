import { useRouteError, Link } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="error-container">
      <div className="error-content">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <h1 className="error-title">Something went wrong!</h1>
        <p className="error-message">
          {error?.message || "An unexpected error occurred"}
        </p>
        <div className="error-actions">
          <Link to="/" className="error-btn">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
