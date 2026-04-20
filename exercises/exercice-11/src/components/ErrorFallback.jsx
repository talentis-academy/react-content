export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ padding: '20px 24px', backgroundColor: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '10px', borderLeft: '4px solid #ef4444', maxWidth: '500px' }}>
      <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#991b1b', marginBottom: '8px' }}>💥 Oops ! Quelque chose s'est mal passé.</h2>
      <p style={{ fontSize: '13px', color: '#7f1d1d', backgroundColor: '#fee2e2', padding: '8px 12px', borderRadius: '6px', fontFamily: 'monospace', marginBottom: '16px' }}>
        {error.message}
      </p>
      <button onClick={resetErrorBoundary} style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>
        🔄 Réessayer
      </button>
    </div>
  );
}
