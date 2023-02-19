<script lang="ts">
	import type { PageData } from '../$types';
	export let data: PageData;
	console.log(data);
</script>

<div class="p-4 w-full h-full">
	{#if data.isLocked}
		<div
			class="w-full h-full flex flex-row items-center justify-center font-black text-font-prime text-3xl"
		>
			LOCKED! &nbsp;
			<img
				class="w-[25px] h-[25px]"
				alt="locked"
				src="https://em-content.zobj.net/thumbs/120/twitter/322/locked_1f512.png"
			/>
		</div>
	{:else}
		<div class="w-full h-full flex flex-col items-center justify-center font-black text-font-prime">
			<div class="flex flex-row items-center justify-center text-6xl absolute top-10">
				{data.data.status} &nbsp;
				<span
					class="w-[25px] h-[25px] rounded-full {data.data.status === 'ACCEPTED'
						? 'bg-green-200'
						: data.data.status === 'PENDING'
						? 'bg-amber-200'
						: 'bg-red-200'}"
				/>
			</div>
			<div class="p-10 border-2 bg-[#f7f7f7] border-[#f1f1ef]">
				<div class="flex flex-row items-center justify-center">
					&rarr;&nbsp;&nbsp;<a
						href="{data.year}/proposal"
						class="text-xl underline w-[250px] text-center hover:w-[225px] transition-all"
						>PROPOSAL</a
					>&nbsp;&nbsp;&larr;
				</div>
				<div class="mt-4 flex flex-row items-center justify-center">
					&rarr;&nbsp;&nbsp;<a
						href="{data.year}/timeline"
						class="text-xl underline w-[250px] text-center hover:w-[225px] transition-all"
						>TIMELINE</a
					>&nbsp;&nbsp;&larr;
				</div>
				<div class="mt-4 flex flex-row items-center justify-center">
					&rarr;&nbsp;&nbsp;<a
						href="{data.year}/code"
						class="text-xl underline w-[250px] text-center hover:w-[225px] transition-all"
						>CODE BASE</a
					>&nbsp;&nbsp;&larr;
				</div>
			</div>
		</div>
	{/if}
</div>
