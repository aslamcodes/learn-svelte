<script lang="ts">
    import type { Todo } from "../types";
    import TodoItem from "./TodoItem.svelte";
    import TodoInput from "./TodoInput.svelte";
    import Stats from "./Stats.svelte";
    import { slide } from "svelte/transition";

    let currTodo = $state("");
    let todoList = $state<Todo[]>([]);

    let filter = $state<"all" | "active" | "completed">("all");

    const filteredTodos = $derived.by(() => {
        switch (filter) {
            case "active":
                return todoList.filter((t) => !t.done);
            case "completed":
                return todoList.filter((t) => t.done);
            default:
                return todoList;
        }
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
    <button onclick={() => (filter = "all")}>All</button>
    <button onclick={() => (filter = "active")}>Active</button>
    <button onclick={() => (filter = "completed")}>Completed</button>
    <br />

    <TodoInput bind:value={currTodo} {addTodo} />

    {#key filter}
        {#each filteredTodos as todo (todo.id)}
            <div transition:slide>
                <TodoItem {todo} {DeleteTodo} {ToggleItem} />
            </div>
        {/each}
    {/key}

    {#if todoList.length === 0}
        <p transition:slide>No todos yet</p>
    {/if}

    <Stats {todoList} />
</div>
