<script lang="ts">
	export let data: null | string[];
</script>

<div class="p-4 w-full h-full">
	{#if data.res === null}
		<div
			class="w-full h-full flex flex-row items-center justify-center font-black text-font-prime text-3xl"
		>
			UNAVAILABLE! &nbsp;
			<img
				class="w-[25px] h-[25px]"
				alt="locked"
				src="https://em-content.zobj.net/thumbs/120/twitter/322/locked_1f512.png"
			/>
		</div>
	{/if}
</div>
