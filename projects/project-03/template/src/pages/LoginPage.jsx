import { useNavigate } from "react-router-dom";
// TODO — Replace with RHF + Zod + React Query useMutation
export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="login-container"><div className="login-card">
      <h1 className="login-title">🍳 Recipe Book</h1>
      <p className="login-subtitle">Sign in to save your recipes</p>
      <form onSubmit={(e) => { e.preventDefault(); navigate("/"); }} className="login-form">
        <div className="form-group"><label className="form-label">Email</label><input type="email" className="form-input" placeholder="you@example.com" required /></div>
        <div className="form-group"><label className="form-label">Password</label><input type="password" className="form-input" placeholder="••••••••" required /></div>
        <button type="submit" className="login-btn">Sign In</button>
      </form>
    </div></div>
  );
}
