export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      padding: '12px 16px', backgroundColor: '#1e293b', borderRadius: '10px',
      opacity: todo.done ? 0.6 : 1,
    }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#4f7eff' }}
      />
      <span style={{
        flex: 1, color: '#f1f5f9', fontSize: '0.95rem',
        textDecoration: todo.done ? 'line-through' : 'none',
      }}>
        {todo.text}
      </span>
      <button
        onClick={() => onRemove(todo.id)}
        style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '1.1rem', lineHeight: 1 }}
      >
        ×
      </button>
    </li>
  );
}
