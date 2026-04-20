import { useState } from 'react';

export default function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Counter</h1>
      <p data-testid="count" style={{ fontSize: '3rem', fontWeight: '700', margin: '20px 0' }}>
        {count}
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        <button onClick={() => setCount(c => c - 1)} data-testid="decrement"
          style={{ padding: '10px 24px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc', cursor: 'pointer' }}>
          −
        </button>
        <button onClick={() => setCount(initialCount)} data-testid="reset"
          style={{ padding: '10px 24px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc', cursor: 'pointer' }}>
          Reset
        </button>
        <button onClick={() => setCount(c => c + 1)} data-testid="increment"
          style={{ padding: '10px 24px', fontSize: '1rem', borderRadius: '8px', backgroundColor: '#4f7eff', color: '#fff', border: 'none', cursor: 'pointer' }}>
          +
        </button>
      </div>
    </div>
  );
}
