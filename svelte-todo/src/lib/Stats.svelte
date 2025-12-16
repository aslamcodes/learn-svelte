<script lang="ts">
    interface Props {
        completed: number;
        pending: number;
    }

    let { completed, pending}: Props = $props();
</script>

<div>
    Completed so far {completed}, only {pending} yet to be done
</div>
