import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

const initial = [
  { id: 1, text: "Lire la documentation React", done: false },
  { id: 2, text: "Créer mon premier composant", done: true },
  { id: 3, text: "Comprendre les props", done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks-15');
    return saved ? JSON.parse(saved) : initial;
  });

  useEffect(() => { localStorage.setItem('tasks-15', JSON.stringify(tasks)); }, [tasks]);

  function addTask(text) { setTasks([...tasks, { id: Date.now(), text: text.trim(), done: false }]); }
  function deleteTask(id) { setTasks(tasks.filter(t => t.id !== id)); }
  function toggleTask(id) { setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t)); }
  function clearDone() { setTasks(tasks.filter(t => !t.done)); }

  const remaining = tasks.filter(t => !t.done).length;

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Mes tâches ({remaining} restantes)</h1>
        {tasks.some(t => t.done) && (
          <button onClick={clearDone} style={{ fontSize: '0.8rem', color: '#999', border: '1px solid #ddd', background: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer' }}>Nettoyer ✓</button>
        )}
      </div>
      <TaskInput onAdd={addTask} />
      {tasks.length === 0 && <p style={{ color: '#999', textAlign: 'center', padding: '2rem' }}>Aucune tâche — profitez-en ! 🎉</p>}
      {tasks.map(task => <TaskItem key={task.id} task={task} onDelete={deleteTask} onToggle={toggleTask} />)}
    </div>
  );
}
