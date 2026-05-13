import useFetchApi from '../hooks/useFetchApi';

export default function Comments() {
  const { data: comments, isLoading, isError } = useFetchApi('https://jsonplaceholder.typicode.com/comments?postId=1');
  if (isLoading) return <div style={{ padding: '20px', textAlign: 'center', color: '#6b7280' }}>⏳ Chargement des commentaires...</div>;
  if (isError) return <div style={{ padding: '20px', textAlign: 'center', color: '#ef4444' }}>❌ Impossible de charger les commentaires.</div>;
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto 32px', backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>💬 Commentaires — Post #1 ({comments?.length ?? 0})</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {comments?.map(c => (
          <li key={c.id} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '3px solid #3b82f6' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', flexWrap: 'wrap', gap: '4px' }}>
              <span style={{ fontWeight: '600', fontSize: '13px', color: '#1f2937' }}>{c.name}</span>
              <span style={{ fontSize: '12px', color: '#3b82f6' }}>{c.email}</span>
            </div>
            <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: '1.5', margin: 0 }}>{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
