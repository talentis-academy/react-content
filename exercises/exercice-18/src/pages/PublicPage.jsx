import { Link } from 'react-router-dom';
export default function PublicPage() {
  return (
    <div style={{ padding: '3rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Page publique 🌐</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Accessible sans connexion.</p>
      <Link to="/dashboard" style={{ padding: '10px 20px', background: '#6366f1', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: '600' }}>Accéder au dashboard →</Link>
      <br /><br />
      <Link to="/login" style={{ color: '#6b7280', fontSize: '0.875rem' }}>Se connecter</Link>
    </div>
  );
}
