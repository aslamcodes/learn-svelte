<script>
    let state = $state(0);
</script>

<button
    onclick={() => {
        state++;
    }}
>
    {state}
</button>

<style>
    button {
        background-color: red;
        padding: 15px;
    }
</style>
