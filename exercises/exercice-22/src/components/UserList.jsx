import { useGetUsersQuery } from '../store/apiSlice';
export default function UserList({ selectedId, onSelect }) {
  const { data: users, isLoading, isError, refetch } = useGetUsersQuery();
  if (isLoading) return <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>{[1,2,3,4,5].map(i => <div key={i} style={{ height: '56px', background: '#f3f4f6', borderRadius: '8px' }} />)}</div>;
  if (isError) return <div style={{ textAlign: 'center', padding: '2rem' }}><p style={{ color: '#ef4444' }}>Erreur</p><button onClick={refetch} style={{ padding: '8px 16px', background: '#6366f1', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Réessayer</button></div>;
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {users.map(u => (
        <li key={u.id}>
          <button onClick={() => onSelect(u.id)} style={{ width: '100%', textAlign: 'left', padding: '12px 14px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: selectedId === u.id ? '#ede9fe' : '#f9fafb', color: selectedId === u.id ? '#6d28d9' : '#111', fontWeight: selectedId === u.id ? '700' : '500' }}>
            <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>{u.name}</div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{u.email}</div>
          </button>
        </li>
      ))}
    </ul>
  );
}
