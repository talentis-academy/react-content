import { useState, useCallback } from 'react';
import { todoService } from '../services/todo.service';

export function useTodos() {
  const [todos, setTodos] = useState(() => todoService.getAll());

  const add = useCallback((text) => {
    todoService.add(text);
    setTodos(todoService.getAll());
  }, []);

  const toggle = useCallback((id) => {
    todoService.toggle(id);
    setTodos(todoService.getAll());
  }, []);

  const remove = useCallback((id) => {
    todoService.remove(id);
    setTodos(todoService.getAll());
  }, []);

  return { todos, add, toggle, remove };
}
