<script lang="ts">
    import Header from "$components/Layout/Header.svelte";
	import "./../app.css";

	let { children } = $props();
</script>

<Header />
{@render children?.()}
