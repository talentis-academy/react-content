import { useTheme } from './ThemeContext';

export default function Navbar() {
  const { theme, toggle } = useTheme();
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '14px 24px',
      backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
      borderBottom: `1px solid ${theme === 'dark' ? '#334155' : '#e2e8f0'}`,
    }}>
      <span style={{ fontWeight: '700', fontSize: '1.1rem', color: theme === 'dark' ? '#f1f5f9' : '#1e293b' }}>
        MyApp
      </span>
      <button
        onClick={toggle}
        style={{
          padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer',
          backgroundColor: theme === 'dark' ? '#334155' : '#f1f5f9',
          color: theme === 'dark' ? '#f1f5f9' : '#1e293b',
          fontWeight: '600', fontSize: '0.9rem',
        }}
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
}
