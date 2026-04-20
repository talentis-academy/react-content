import { useNavigate } from "react-router-dom";

// TODO 1 — Replace native form with react-hook-form + zod validation
// TODO 2 — Replace handleSubmit with a React Query useMutation calling fakeLogin()
// TODO 3 — On success: store token in localStorage, navigate to "/"

export default function LoginPage() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // TODO — replace this with a real mutation
    navigate("/");
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to your account</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className="form-input" placeholder="Enter your password" required />
          </div>
          {/* TODO — Show error message when mutation fails */}
          <button type="submit" className="login-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}
