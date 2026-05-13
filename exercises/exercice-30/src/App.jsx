import { useTodos } from './hooks/useTodos';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

export default function App() {
  const { todos, add, toggle, remove } = useTodos();
  const done = todos.filter(t => t.done).length;

  return (
    <div style={{
      minHeight: '100vh', backgroundColor: '#0f172a', fontFamily: 'sans-serif',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
    }}>
      <div style={{ width: '100%', maxWidth: '520px' }}>
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{ color: '#f1f5f9', margin: '0 0 4px', fontSize: '1.6rem', fontWeight: '800' }}>
            Todo App
          </h1>
          <p style={{ color: '#64748b', margin: 0, fontSize: '0.875rem' }}>
            Clean Architecture: Service → Hook → Component
          </p>
        </div>

        <div style={{ backgroundColor: '#1e293b', borderRadius: '16px', padding: '24px' }}>
          <AddTodoForm onAdd={add} />
          <TodoList todos={todos} onToggle={toggle} onRemove={remove} />
          <p style={{ margin: '16px 0 0', color: '#475569', fontSize: '0.8rem', textAlign: 'right' }}>
            {done} / {todos.length} completed
          </p>
        </div>
      </div>
    </div>
  );
}
