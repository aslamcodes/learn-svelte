import type { Todo } from "../types";

export const todoState = $state<Todo[]>([]);

export function addTodo(currTodo: string) {
  todoState.push({
    id: crypto.randomUUID(),
    description: currTodo,
    done: false,
  });
}

export function deleteTodo(id: string) {
  const idx = todoState.findIndex(t => t.id === id);
  if (idx !== -1) todoState.splice(idx, 1);
}

export function toggleItem(id: string) {
  const item = todoState.find(t => t.id === id);
  if (item) item.done = !item.done;
}
