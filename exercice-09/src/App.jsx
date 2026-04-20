import { useState, useEffect } from 'react';

const initialTodos = [
  { id: 1, text: 'Apprendre useState', done: false },
  { id: 2, text: 'Pratiquer useEffect', done: false },
  { id: 3, text: 'Comprendre les props', done: true },
  { id: 4, text: 'Créer un composant Card', done: false },
  { id: 5, text: 'Maîtriser les listes et clés', done: true },
];

const s = {
  container: { maxWidth: '520px', margin: '40px auto', padding: '24px', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: 'system-ui, sans-serif' },
  filters: { display: 'flex', gap: '8px', marginBottom: '16px' },
  filterBtn: { padding: '6px 14px', border: '1.5px solid #e5e7eb', borderRadius: '9999px', background: 'white', color: '#374151', fontSize: '13px', cursor: 'pointer', fontWeight: '500' },
  filterBtnActive: { backgroundColor: '#3b82f6', borderColor: '#3b82f6', color: 'white' },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' },
  item: { display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', backgroundColor: '#f9fafb', borderRadius: '10px', cursor: 'pointer', border: '1px solid #f3f4f6' },
};

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const t = setTimeout(() => { setTodos(initialTodos); setLoading(false); }, 1200);
    return () => clearTimeout(t);
  }, []);

  function toggleTodo(id) {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  const countDone = todos.filter(t => t.done).length;
  const filtered = todos.filter(t => filter === 'done' ? t.done : filter === 'todo' ? !t.done : true);

  if (loading) return <div style={s.container}><h1>✅ Todo App</h1><p style={{ color: '#6b7280', fontStyle: 'italic' }}>Chargement...</p></div>;

  return (
    <div style={s.container}>
      <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>✅ Todo App</h1>
      <div style={s.filters}>
        {[{ key: 'all', label: `All (${todos.length})` }, { key: 'todo', label: `Todo (${todos.length - countDone})` }, { key: 'done', label: `Done (${countDone})` }].map(({ key, label }) => (
          <button key={key} onClick={() => setFilter(key)} style={{ ...s.filterBtn, ...(filter === key ? s.filterBtnActive : {}) }}>{label}</button>
        ))}
      </div>
      {filtered.length === 0 && <p style={{ color: '#9ca3af', textAlign: 'center', padding: '20px 0', fontStyle: 'italic' }}>Aucune tâche.</p>}
      <ul style={s.list}>
        {filtered.map(todo => (
          <li key={todo.id} style={s.item} onClick={() => toggleTodo(todo.id)}>
            <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} onClick={e => e.stopPropagation()} style={{ cursor: 'pointer', width: '16px', height: '16px' }} />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none', opacity: todo.done ? 0.45 : 1, fontSize: '15px', color: '#1f2937', userSelect: 'none' }}>{todo.text}</span>
            <span style={{ marginLeft: 'auto', fontSize: '11px', padding: '2px 8px', borderRadius: '999px', backgroundColor: todo.done ? '#dcfce7' : '#fef9c3', color: todo.done ? '#16a34a' : '#854d0e', fontWeight: '500' }}>
              {todo.done ? 'Done' : 'Todo'}
            </span>
          </li>
        ))}
      </ul>
      <p style={{ marginTop: '16px', fontSize: '13px', color: '#6b7280', textAlign: 'right' }}>{countDone} / {todos.length} terminées</p>
    </div>
  );
}
