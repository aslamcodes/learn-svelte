<script lang="ts">
    import type { Todo } from "../types";
    import TodoItem from "./TodoItem.svelte";
    import TodoInput from "./TodoInput.svelte";
    import Stats from "./Stats.svelte";

    let currTodo = $state("");
    let todoList = $state<Todo[]>([]);

    // when used without derived, the todolist.length will not point to the reactive proxy,
    // hence any updates to the proxies via the AddTodo function will not update this variable
    const todoCount = $derived.by(() => {
        const completed = todoList.filter((t) => t.done).length;
        return {
            completed,
            pending: todoList.length - completed,
        };
    });

    function addTodo() {
        let todo: Todo = {
            id: crypto.randomUUID(),
            description: currTodo,
            done: false,
        };

        todoList.push(todo);

        currTodo = "";
    }

    function DeleteTodo(id: string) {
        todoList = todoList.filter((todo) => todo.id != id);
    }

    function ToggleItem(id: string) {
        let item = todoList.findIndex((todo) => todo.id === id);

        if (item == -1) {
            return;
        }

        todoList[item].done = !todoList[item].done;
    }

    $inspect(todoList).with(console.log);
</script>

<div>
    <TodoInput bind:value={currTodo} {addTodo} />

    {#each todoList as todo}
        <TodoItem {todo} {DeleteTodo} {ToggleItem} />
    {/each}

    <Stats completed={todoCount.completed} pending={todoCount.pending} />
</div>
