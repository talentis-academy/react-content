import { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function LoginPage() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const from = location.state?.from?.pathname || '/dashboard';
  if (user) return <Navigate to={from} replace />;
  async function handleSubmit(e) {
    e.preventDefault(); setLoading(true); setError('');
    await new Promise(r => setTimeout(r, 500));
    const { username, password } = Object.fromEntries(new FormData(e.target));
    const result = login({ username, password }); setLoading(false);
    if (result.success) navigate(from, { replace: true }); else setError(result.error);
  }
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb', fontFamily: 'sans-serif' }}>
      <div style={{ background: 'white', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.07)', width: '100%', maxWidth: '380px' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Connexion</h1>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.875rem' }}>Identifiants : <code>admin</code> / <code>password</code></p>
        {location.state?.from && <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: '8px', padding: '10px', marginBottom: '1rem', fontSize: '0.875rem', color: '#92400e' }}>Vous devez être connecté pour accéder à cette page.</div>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input name="username" placeholder="Nom d'utilisateur" required style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }} />
          <input name="password" type="password" placeholder="Mot de passe" required style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }} />
          {error && <p style={{ color: '#ef4444', fontSize: '0.875rem', margin: 0 }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ padding: '12px', background: loading ? '#a5b4fc' : '#6366f1', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}
