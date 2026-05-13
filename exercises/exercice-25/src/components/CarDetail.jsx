function Row({ label, children }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <span style={{ color: '#8b949e', fontSize: '0.95rem' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>{children}</div>
    </div>
  );
}

export default function CarDetail({ car, onBack }) {
  return (
    <div style={{
      backgroundColor: '#1c2333', borderRadius: '16px', padding: '28px 32px', width: '420px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    }}>
      <h1 style={{ margin: '0 0 8px', fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', textAlign: 'center' }}>
        {car.name}
      </h1>
      <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)', marginBottom: '4px' }} />

      <Row label="Brand">
        <span style={{ color: '#ffffff', fontWeight: '700' }}>{car.brand}</span>
      </Row>
      <Row label="Color">
        <span style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: car.colorHex, display: 'inline-block' }} />
        <span style={{ color: '#ffffff', fontWeight: '700' }}>{car.color}</span>
      </Row>
      <Row label="Year">
        <span style={{ color: '#ffffff', fontWeight: '700' }}>{car.year}</span>
      </Row>
      <Row label="Price">
        <span style={{ color: '#ffffff', fontWeight: '700' }}>${car.price.toLocaleString('en-US')}</span>
      </Row>
      <Row label="Availability">
        <span style={{
          padding: '4px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600',
          backgroundColor: car.available ? '#1a3a2a' : '#3a1a1a',
          color: car.available ? '#3fb950' : '#f85149',
        }}>
          {car.available ? 'Available' : 'Sold'}
        </span>
      </Row>

      <button
        onClick={onBack}
        style={{
          width: '100%', padding: '14px', marginTop: '20px', backgroundColor: '#4f7eff',
          color: '#ffffff', border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer',
        }}
      >
        Back to list
      </button>
    </div>
  );
}
