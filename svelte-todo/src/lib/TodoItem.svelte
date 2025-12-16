<script lang="ts">
    import type { Todo } from "../types";

    interface Props {
        todo: Todo;
        DeleteTodo: (id: string) => void;
        ToggleItem: (id: string) => void;
    }

    let { todo, DeleteTodo, ToggleItem }: Props = $props();
</script>

<div class="todo">
    <!-- Since todo is an object from a proxy object, binding todo here reflects to object proxy defined in the Todolist component -->
    <input type="checkbox" checked={todo.done} onchange={() => ToggleItem(todo.id)} />
    {todo.description}
    <button onclick={() => DeleteTodo(todo.id)}>delete</button>
</div>
