<script lang="ts">
    interface Props {
        value: string;
        addTodo: () => void;
    }

    let { value = $bindable(), addTodo }: Props = $props();
</script>

<input bind:value onkeydown={(e) => e.key === "Enter" && addTodo()} />
<button onclick={addTodo}>Add</button>
