import { Link } from 'react-router-dom';
export default function NotFoundPage() {
  return <div style={{ textAlign: 'center', padding: '4rem', fontFamily: 'sans-serif' }}><h1 style={{ fontSize: '4rem', color: '#d1d5db' }}>404</h1><Link to="/">← Retour</Link></div>;
}
