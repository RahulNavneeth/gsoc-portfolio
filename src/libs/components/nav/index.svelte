<script lang="ts">
	import { goto } from '$app/navigation';
	import { YEAR_SELECTED } from '../../store/nav';
	const NAME: string = 'GSOC';
</script>

<div
	class="w-1/5 border-r-2 border-[#f1f1ef] py-4 h-full flex flex-col items-center justify-start bg-[#f7f7f5]"
>
	<a href="/" class="font-black text-2xl">
		{NAME}
	</a>
	<div class="mt-3 w-full flex flex-col justify-centei items-center">
		{#each Array(3) as _, index}
			<div class="w-full flex flex-col items-center justify-startt">
				<div
					aria-hidden="true"
					on:click={() => {
						goto(`/${new Date().getFullYear() + index}`);
						YEAR_SELECTED.set(2023 + index);
					}}
					class="w-full {$YEAR_SELECTED === 2023 + index
						? 'bg-[#f1f1ef]'
						: ''} hover:bg-[#e8e8e6] hover:font-black mt-2 p-2 transition-all cursor-pointer font-medium flex flex-row items-center justify-start {new Date().getFullYear() >=
					2023 + index
						? ''
						: 'text-r'}"
				>
					<div class="w-full flex flex-row items-center justify-around ">
						{#if $YEAR_SELECTED === 2023 + index}
							<span class="font-black">&darr;</span>
						{:else}
							<span class="font-black">&rarr;</span>
						{/if}
						<span class={$YEAR_SELECTED === 2023 + index ? 'font-black' : ''}>{2023 + index}</span>
						<img
							class="w-[16px] h-[16px]"
							alt="locked"
							src="https://em-content.zobj.net/thumbs/120/twitter/322/{new Date().getFullYear() >=
							2023 + index
								? 'unlocked_1f513'
								: 'locked_1f512'}.png"
						/>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
