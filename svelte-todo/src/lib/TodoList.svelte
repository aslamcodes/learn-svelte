<script lang="ts">
    type Todo = {
        id: number;
        description: string;
        done: boolean;
    };

    let todoList: Todo[] = $state<Todo[]>([
        {
            id: 1,
            description: "hello",
            done: true,
        },
    ]);

    // when used without derived, the todolist.length will not point to the reactive proxy,
    // hence any updates to the proxies via the AddTodo function will not update this variable
    let todoCount: number = $derived(todoList.length);

    function AddTodo(todoText: string) {
        let todo: Todo = {
            id: 1,
            description: todoText,
            done: false,
        };

        todoList.push(todo);
    }
</script>

<div>
    {#each todoList as todo}
        <div class="todo">
            [{#if todo.done}
                x
            {/if}]
            {todo.description}
        </div>
    {/each}
    Total items {todoCount}

    <button onclick={() => AddTodo("demo")}>Add Todo</button>
</div>
