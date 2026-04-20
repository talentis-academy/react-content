import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export default function DebounceDemo() {
  const [value, setValue] = useState('');
  const debounced = useDebounce(value, 500);
  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type fast — debounced value updates after 500ms"
        style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#f1f5f9', width: '100%', boxSizing: 'border-box' }}
      />
      <p style={{ margin: '8px 0 0', fontSize: '0.8rem', color: '#64748b' }}>
        Live: <span style={{ color: '#f1f5f9' }}>{value}</span> &nbsp;|&nbsp;
        Debounced: <span style={{ color: '#4f7eff' }}>{debounced}</span>
      </p>
    </div>
  );
}
