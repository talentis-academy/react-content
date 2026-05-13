import { useLocalStorage } from '../hooks/useLocalStorage';

export default function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('demo-name', '');
  return (
    <div style={{ marginBottom: '8px' }}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Type your name (persists on reload)"
        style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#f1f5f9', width: '100%', boxSizing: 'border-box' }}
      />
      {name && <p style={{ margin: '8px 0 0', color: '#4f7eff', fontSize: '0.875rem' }}>Hello, {name}! (saved to localStorage)</p>}
    </div>
  );
}
