import { useState } from 'react';

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task..."
        style={{
          flex: 1, padding: '10px 14px', borderRadius: '10px',
          border: '1px solid #334155', backgroundColor: '#0f172a', color: '#f1f5f9',
          fontSize: '0.9rem',
        }}
      />
      <button type="submit" style={{
        padding: '10px 20px', backgroundColor: '#4f7eff', color: '#fff', border: 'none',
        borderRadius: '10px', fontWeight: '600', cursor: 'pointer',
      }}>
        Add
      </button>
    </form>
  );
}
