import { useTheme } from './ThemeContext';

export default function Card({ title, text }) {
  const { theme } = useTheme();
  return (
    <div style={{
      backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
      border: `1px solid ${theme === 'dark' ? '#334155' : '#e2e8f0'}`,
      borderRadius: '12px', padding: '20px',
    }}>
      <h3 style={{ margin: '0 0 8px', color: theme === 'dark' ? '#f1f5f9' : '#1e293b', fontWeight: '700' }}>
        {title}
      </h3>
      <p style={{ margin: 0, color: theme === 'dark' ? '#94a3b8' : '#64748b', fontSize: '0.9rem' }}>
        {text}
      </p>
    </div>
  );
}
