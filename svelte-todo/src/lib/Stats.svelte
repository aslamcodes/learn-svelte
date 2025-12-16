<script lang="ts">
    import type { Todo } from "../types";

    interface Props {
        todoList: Todo[];
    }

    let { todoList }: Props = $props();

    // when used without derived, the todolist.length will not point to the reactive proxy,
    // hence any updates to the proxies via the AddTodo function will not update this variable
    const todoCount = $derived.by(() => {
        const completed = todoList.filter((t) => t.done).length;
        return {
            completed,
            pending: todoList.length - completed,
        };
    });
</script>

<div>
    Completed so far {todoCount.completed}, only {todoCount.pending} yet to be done
</div>
