import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onRemove }) {
  if (!todos.length) {
    return <p style={{ color: '#475569', textAlign: 'center', padding: '20px' }}>No tasks yet.</p>;
  }
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
}
