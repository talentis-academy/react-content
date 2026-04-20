export default function MemberCard({ fullName, role, email, remote, showEmail = true }) {
  const emailDisplay = email ?? 'N/A';
  return (
    <div style={{
      border: '1px solid #ddd', borderRadius: '8px', padding: '1rem',
      marginBottom: '1rem', maxWidth: '320px', boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
    }}>
      <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem' }}>{fullName}</h3>
      <p style={{ margin: '0 0 0.5rem', color: '#555', fontSize: '0.9rem' }}>{role}</p>
      {showEmail && (
        <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem' }}>{emailDisplay}</p>
      )}
      {remote && (
        <span style={{
          background: '#3498db', color: 'white', padding: '2px 8px',
          borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold',
        }}>Remote</span>
      )}
    </div>
  );
}
