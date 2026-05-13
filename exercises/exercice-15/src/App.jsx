import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import BuggyComponent from './components/BuggyComponent';
import ErrorFallback from './components/ErrorFallback';

export default function App() {
  const [shouldCrash, setShouldCrash] = useState(false);

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '24px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '24px' }}>🛡️ Error Boundary Demo</h1>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <button onClick={() => setShouldCrash(false)} style={{ padding: '8px 16px', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>✅ Mode normal</button>
        <button onClick={() => setShouldCrash(true)} style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>💥 Provoquer une erreur</button>
      </div>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => setShouldCrash(false)}>
        <BuggyComponent shouldCrash={shouldCrash} />
      </ErrorBoundary>
    </div>
  );
}
