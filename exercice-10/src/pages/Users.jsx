import useFetchApi from '../hooks/useFetchApi';

const s = {
  section: { maxWidth: '600px', margin: '0 auto 32px', backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' },
  item: { display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', padding: '10px 12px', backgroundColor: '#f9fafb', borderRadius: '8px', fontSize: '14px' },
};

export default function Users() {
  const { data: users, isLoading, isError } = useFetchApi('https://jsonplaceholder.typicode.com/users');
  if (isLoading) return <div style={{ padding: '20px', textAlign: 'center', color: '#6b7280' }}>⏳ Chargement des utilisateurs...</div>;
  if (isError) return <div style={{ padding: '20px', textAlign: 'center', color: '#ef4444' }}>❌ Impossible de charger les utilisateurs.</div>;
  return (
    <div style={s.section}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>👥 Utilisateurs ({users.length})</h2>
      <ul style={s.list}>
        {users.map(u => (
          <li key={u.id} style={s.item}>
            <span style={{ fontWeight: '600', color: '#1f2937', minWidth: '140px' }}>{u.name}</span>
            <span style={{ color: '#3b82f6', flex: 1 }}>{u.email}</span>
            <span style={{ color: '#6b7280', fontSize: '13px' }}>📍 {u.address.city}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
