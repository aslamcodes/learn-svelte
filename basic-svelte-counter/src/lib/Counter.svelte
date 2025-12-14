<script lang="ts">
    let count: number = $state(0);
    let doubled: number = $derived(count * 2);
    const increment = () => {
        count += 1;
    };
    const double = () => {
        count *= 2;
    };
    const conjucture = $derived.by(() => {
        if (count % 2 == 0) {
            return count / 2;
        } else {
            return 3 * count + 1;
        }
    });
</script>

<button onclick={increment}>
    count is {count}
</button>

<button onclick={double}>
    count doubled is {doubled}
</button>

<button>
    {conjucture}
</button>
