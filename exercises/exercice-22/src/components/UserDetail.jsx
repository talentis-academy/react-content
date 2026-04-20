import { useGetUserByIdQuery, useGetUserPostsQuery } from '../store/apiSlice';
export default function UserDetail({ userId }) {
  const { data: user, isLoading: lu } = useGetUserByIdQuery(userId);
  const { data: posts, isLoading: lp } = useGetUserPostsQuery(userId);
  if (lu) return <p style={{ color: '#6b7280' }}>Chargement...</p>;
  return (
    <div>
      <div style={{ background: '#f5f3ff', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.5rem' }}>
        <h2 style={{ margin: '0 0 4px', fontSize: '1.25rem', fontWeight: '800' }}>{user.name}</h2>
        <p style={{ margin: 0, color: '#7c3aed', fontSize: '0.875rem' }}>{user.email}</p>
        <p style={{ margin: '4px 0 0', color: '#6b7280', fontSize: '0.8rem' }}>{user.company.name}</p>
      </div>
      <h3 style={{ fontWeight: '700', marginBottom: '12px' }}>Publications</h3>
      {lp ? <div style={{ height: '60px', background: '#f3f4f6', borderRadius: '8px' }} /> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {posts?.slice(0, 5).map(p => (
            <div key={p.id} style={{ background: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #e5e7eb' }}>
              <p style={{ margin: '0 0 4px', fontWeight: '600', fontSize: '0.875rem', textTransform: 'capitalize' }}>{p.title}</p>
              <p style={{ margin: 0, color: '#6b7280', fontSize: '0.8rem' }}>{p.body.slice(0, 80)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
