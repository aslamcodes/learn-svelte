<script lang="ts">
    interface Props {
        addTodo: (curr: string) => void;
    }
    let { addTodo }: Props = $props();

    let curr = $state("");
</script>

<input bind:value={curr} onkeydown={(e) => e.key === "Enter" && addTodo(curr)} />
<button onclick={() => addTodo(curr)}>Add</button>
