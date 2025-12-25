<script lang="ts">
    import type { Todo } from "../types";
    import TodoItem from "./TodoItem.svelte";
    import TodoInput from "./TodoInput.svelte";
    import Stats from "./Stats.svelte";
    import { slide } from "svelte/transition";
    import {
        todoState as todoList,
        deleteTodo,
        addTodo,
        toggleItem,
    } from "./todoStore.svelte";

    let filter = $state<"all" | "active" | "completed">("all");
    let currTodo = $state("");

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

    $inspect(todoList).with(console.log);
</script>

<div>
    <button onclick={() => (filter = "all")}>All</button>
    <button onclick={() => (filter = "active")}>Active</button>
    <button onclick={() => (filter = "completed")}>Completed</button>
    <br />

    <TodoInput {addTodo} />

    {#key filter}
        {#each filteredTodos as todo (todo.id)}
            <div transition:slide>
                <TodoItem {todo} {deleteTodo} {toggleItem} />
            </div>
        {/each}
    {/key}

    {#if todoList.length === 0}
        <p transition:slide>No todos yet</p>
    {/if}

    <Stats {todoList} />
</div>
