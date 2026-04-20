import { useFetch } from '../hooks/useFetch';

export default function FetchDemo() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users?_limit=5');
  return (
    <div>
      {loading && <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Loading users...</p>}
      {error && <p style={{ color: '#f85149', fontSize: '0.875rem' }}>Error: {error}</p>}
      {data && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {data.map(u => (
            <li key={u.id} style={{ padding: '8px 12px', backgroundColor: '#0f172a', borderRadius: '8px', fontSize: '0.875rem', color: '#cbd5e1' }}>
              <strong style={{ color: '#f1f5f9' }}>{u.name}</strong> — {u.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
