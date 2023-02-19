<script lang="ts">
	import '../app.css';
	import Nav from '../libs/components/nav/index.svelte';
</script>

<div class="flex flex-row items-start justify-start w-screen h-screen text-font-prime">
	<Nav />
	<slot />
</div>
