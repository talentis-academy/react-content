export default function CarCard({ car, onViewDetails }) {
  return (
    <div style={{
      backgroundColor: '#1c2333',
      borderRadius: '14px',
      padding: '20px',
      width: '320px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    }}>
      <h2 style={{ margin: '0 0 10px', fontSize: '1.2rem', fontWeight: '700', color: '#ffffff' }}>
        {car.name}
      </h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <span style={{
          width: '14px', height: '14px', borderRadius: '50%',
          backgroundColor: car.colorHex, display: 'inline-block', flexShrink: 0,
        }} />
        <span style={{ color: '#8b949e', fontSize: '0.9rem' }}>{car.color}</span>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <span style={{
          display: 'inline-block', padding: '3px 12px', borderRadius: '20px',
          fontSize: '0.8rem', fontWeight: '500',
          backgroundColor: car.available ? '#e6ffed' : '#fef2f2',
          color: car.available ? '#2da44e' : '#ef4444',
          border: `1px solid ${car.available ? '#a7f3d0' : '#fecaca'}`,
        }}>
          {car.available ? 'Available' : 'Sold'}
        </span>
      </div>

      <p style={{ margin: '0 0 16px', fontSize: '1.6rem', fontWeight: '700', color: '#ffffff' }}>
        ${car.price.toLocaleString('en-US')}
      </p>

      <button
        onClick={() => onViewDetails(car.id)}
        style={{
          width: '100%', padding: '12px', backgroundColor: '#4f7eff',
          color: '#ffffff', border: 'none', borderRadius: '8px',
          fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer',
        }}
      >
        View Details
      </button>
    </div>
  );
}
