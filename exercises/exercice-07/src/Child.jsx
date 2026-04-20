export default function Child({ order, onRespond }) {
  return (
    <div style={{ border: '2px solid #2c3e50', borderRadius: '8px', padding: '1.5rem', marginTop: '1.5rem', background: '#f9f9f9' }}>
      <h2>🪖 Soldat — Terrain</h2>
      <p style={{ fontSize: '1.05rem' }}><strong>Ordre reçu :</strong> {order}</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button onClick={() => onRespond('accepted')} style={{ padding: '0.5rem 1.2rem', background: '#27ae60', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Accepter</button>
        <button onClick={() => onRespond('refused')} style={{ padding: '0.5rem 1.2rem', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Refuser</button>
      </div>
    </div>
  );
}
