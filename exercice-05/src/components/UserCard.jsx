export default function UserCard({ name, city, hobby }) {
  return (
    <div style={{
      width: '220px', backgroundColor: '#1c2333', borderRadius: '14px',
      padding: '24px 20px', textAlign: 'center', fontFamily: 'sans-serif',
    }}>
      <div style={{
        width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#4f7eff',
        color: '#fff', fontSize: '1.3rem', fontWeight: '700',
        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px',
      }}>
        {name[0].toUpperCase()}
      </div>
      <h2 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: '700', color: '#fff' }}>{name}</h2>
      <p style={{ margin: '0 0 4px', fontSize: '0.85rem', color: '#8b949e' }}>📍 {city}</p>
      <p style={{ margin: 0, fontSize: '0.85rem', color: '#8b949e' }}>🎯 {hobby}</p>
    </div>
  );
}
