export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderBottom: '1px solid #eee' }}>
      <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
      <span style={{ flex: 1, textDecoration: task.done ? 'line-through' : 'none', color: task.done ? '#bbb' : '#333', fontSize: '1rem' }}>{task.text}</span>
      <button onClick={() => onDelete(task.id)} style={{ color: '#e74c3c', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.1rem', padding: '4px 8px' }} aria-label="Supprimer">✕</button>
    </div>
  );
}
