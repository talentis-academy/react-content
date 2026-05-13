import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function DashboardPage() {
  const { user, logout } = useAuth();
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', fontFamily: 'sans-serif', padding: '0 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Dashboard</h1>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span style={{ color: '#6b7280' }}>Bonjour, {user.name}</span>
          <button onClick={logout} style={{ padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Déconnexion</button>
        </div>
      </div>
      <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '1.5rem', marginTop: '1.5rem' }}>
        <p style={{ color: '#166534', fontWeight: '600' }}>✓ Vous êtes connecté</p>
        <p style={{ color: '#4b5563' }}>Cette page est protégée.</p>
      </div>
    </div>
  );
}
