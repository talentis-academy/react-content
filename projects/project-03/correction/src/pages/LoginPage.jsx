import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fakeLogin } from "../api/fakeRecipesApi";
import { setToken } from "../utils/auth";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const { mutate, isPending, error } = useMutation({
    mutationFn: fakeLogin,
    onSuccess: ({ token }) => {
      setToken(token);
      navigate("/");
    },
  });

  return (
    <div className="container" style={{ maxWidth: "420px" }}>
      <h1 className="page-title">🍳 Recipe Book</h1>
      <div className="login-card">
        <h2 style={{ marginBottom: "1.5rem", color: "var(--text-primary)" }}>Sign In</h2>
        <form onSubmit={handleSubmit((data) => mutate(data))} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input {...register("email")} className="form-input" placeholder="you@example.com" />
            {errors.email && <p className="form-error">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input {...register("password")} type="password" className="form-input" placeholder="••••••••" />
            {errors.password && <p className="form-error">{errors.password.message}</p>}
          </div>
          {error && <p className="form-error">{error.message}</p>}
          <button type="submit" className="submit-btn" disabled={isPending}>
            {isPending ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--text-secondary)", textAlign: "center" }}>
          Hint: any email + password ≥ 4 chars
        </p>
      </div>
    </div>
  );
}
