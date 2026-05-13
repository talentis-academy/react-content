let nextId = 1;
const todos = [
  { id: nextId++, text: 'Learn React Clean Architecture', done: false },
  { id: nextId++, text: 'Separate concerns into layers', done: true },
  { id: nextId++, text: 'Write reusable hooks', done: false },
];

export const todoService = {
  getAll: () => [...todos],
  add: (text) => {
    const todo = { id: nextId++, text, done: false };
    todos.push(todo);
    return todo;
  },
  toggle: (id) => {
    const todo = todos.find(t => t.id === id);
    if (todo) todo.done = !todo.done;
    return todo;
  },
  remove: (id) => {
    const idx = todos.findIndex(t => t.id === id);
    if (idx !== -1) todos.splice(idx, 1);
  },
};
