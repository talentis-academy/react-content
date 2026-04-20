import { useState } from 'react';
export default function TaskInput({ onAdd }) {
  const [value, setValue] = useState('');
  function handleSubmit(e) { e.preventDefault(); if (!value.trim()) return; onAdd(value); setValue(''); }
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
      <input value={value} onChange={e => setValue(e.target.value)} placeholder="Nouvelle tâche..."
        style={{ flex: 1, padding: '10px 12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1rem' }} />
      <button type="submit" disabled={!value.trim()}
        style={{ padding: '10px 18px', borderRadius: '6px', background: '#3498db', color: 'white', border: 'none', cursor: value.trim() ? 'pointer' : 'not-allowed', opacity: value.trim() ? 1 : 0.5 }}>
        Ajouter
      </button>
    </form>
  );
}
