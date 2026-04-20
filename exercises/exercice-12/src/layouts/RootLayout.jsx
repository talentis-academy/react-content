import { Outlet, Link } from 'react-router-dom';
export default function RootLayout() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '0 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ fontWeight: 'bold', fontSize: '18px', color: '#111827', textDecoration: 'none' }}>🚀 MyApp</Link>
          <nav style={{ display: 'flex', gap: '16px' }}>
            <Link to="/" style={{ color: '#374151', textDecoration: 'none', fontSize: '14px' }}>Accueil</Link>
            <Link to="/login" style={{ color: '#374151', textDecoration: 'none', fontSize: '14px' }}>Connexion</Link>
          </nav>
        </div>
      </header>
      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 24px' }}><Outlet /></main>
    </div>
  );
}
