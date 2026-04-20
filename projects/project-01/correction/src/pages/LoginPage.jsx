"use client";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../api/actions";
import { storage } from "../utils/storage";

export default function LoginPage() {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: ({ userName, password }) =>
      login(userName, password, true, false, 0),
    onSuccess: (response) => {
      // Store session token in localStorage
      if (response.session) {
        storage.setToken(response.session);
      }

      // Store userDetails in localStorage
      if (response.userDetails) {
        storage.setUser(response.userDetails);
        // Dispatch event to update Header
        window.dispatchEvent(new CustomEvent("userUpdated"));
      }

      // Navigate to home page on success
      navigate("/");
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userName = formData.get("userName");
    const password = formData.get("password");

    loginMutation.mutate({ userName, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to your account</p>
        <form onSubmit={handleSubmit} className="login-form">
          {loginMutation.isError && (
            <div
              className="error-message"
              style={{ color: "red", marginBottom: "1rem" }}
            >
              {loginMutation.error?.response?.data?.message ||
                loginMutation.error?.message ||
                "Login failed. Please try again."}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="userName" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="form-input"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="login-btn"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
