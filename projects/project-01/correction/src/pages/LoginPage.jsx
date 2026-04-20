import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { fakeLogin } from "../api/fakeCarsApi";
import { setToken } from "../utils/auth";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const mutation = useMutation({
    mutationFn: fakeLogin,
    onSuccess: ({ token }) => { setToken(token); navigate("/"); },
  });

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to your account</p>
        <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="login-form">
          {mutation.isError && <p style={{ color: "var(--error)", fontSize: "0.875rem" }}>{mutation.error.message}</p>}
          <div className="form-group">
            <label className="form-label">Email</label>
            <input {...register("email")} type="text" className="form-input" placeholder="you@example.com" />
            {errors.email && <span style={{ color: "var(--error)", fontSize: "0.8rem" }}>{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input {...register("password")} type="password" className="form-input" placeholder="••••••••" />
            {errors.password && <span style={{ color: "var(--error)", fontSize: "0.8rem" }}>{errors.password.message}</span>}
          </div>
          <button type="submit" className="login-btn" disabled={mutation.isPending}>
            {mutation.isPending ? "Signing in…" : "Sign In"}
          </button>
        </form>
        <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: "1rem" }}>
          Use any email + password (min 4 chars)
        </p>
      </div>
    </div>
  );
}
