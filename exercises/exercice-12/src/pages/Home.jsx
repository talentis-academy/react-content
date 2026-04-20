import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();
  function handleLogout() { localStorage.removeItem('token'); navigate('/login'); }
  return (
    <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', textAlign: 'center' }}>
      <h1 style={{ fontSize: '28px', color: '#111827', marginBottom: '8px' }}>Bienvenue 👋</h1>
      <p style={{ color: '#6b7280', marginBottom: '24px' }}>Vous êtes connecté. Cette page est protégée.</p>
      <button onClick={handleLogout} style={{ padding: '10px 24px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Se déconnecter</button>
    </div>
  );
}
