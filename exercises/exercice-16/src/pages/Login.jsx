import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  function handleLogin() { localStorage.setItem('token', 'fake-jwt-' + Date.now()); navigate('/'); }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', width: '100%', maxWidth: '380px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '24px', color: '#111827', marginBottom: '8px' }}>Connexion</h1>
        <p style={{ color: '#6b7280', marginBottom: '24px', fontSize: '14px' }}>Connectez-vous pour accéder à votre espace.</p>
        <button onClick={handleLogin} style={{ width: '100%', padding: '12px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>Se connecter</button>
      </div>
    </div>
  );
}
