import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1 style={{ fontSize: '64px', color: '#d1d5db' }}>404</h1>
      <p style={{ color: '#6b7280', marginBottom: '20px' }}>Page non trouvée.</p>
      <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '600' }}>← Retour à l'accueil</Link>
    </div>
  );
}
