"use client";

import { useState } from "react";

export default function ApiDemoPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSuccess = () => {
    setError("");
    setSuccess("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess("Data loaded successfully!");
    }, 2000);
  };

  const handleError = () => {
    setError("");
    setSuccess("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setError("Failed to load data. Please try again.");
    }, 2000);
  };

  return (
    <div className="container">
      <h1 className="page-title">API Demo</h1>

      <div className="api-demo-card">
        <p className="api-demo-description">
          Test loading states and error messages
        </p>

        <div className="button-group">
          <button
            onClick={handleSuccess}
            disabled={loading}
            className="demo-btn demo-btn-success"
          >
            Simulate Success
          </button>
          <button
            onClick={handleError}
            disabled={loading}
            className="demo-btn demo-btn-error"
          >
            Simulate Error
          </button>
        </div>

        {loading && (
          <div className="message-box loading-box">
            <div className="spinner"></div>
            <span>Loading...</span>
          </div>
        )}

        {success && !loading && (
          <div className="message-box success-box">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>{success}</span>
          </div>
        )}

        {error && !loading && (
          <div className="message-box error-box">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}
