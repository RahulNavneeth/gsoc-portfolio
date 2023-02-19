<script lang="ts">
	import { page } from '$app/stores';

	import type { proposal } from '../../../libs/types/page';
	export let data: proposal;
</script>

<div class="overflow-auto pb-8 w-full h-full flex flex-col items-center justify-start">
	<div class="font-black text-6xl bg-[#e8e8e6] w-full text-center py-4">{data.company_name}</div>
	<div class="w-full mt-12 px-10">
		<div class="w-full h-full flex flex-col items-start justify-start">
			<div class="font-black text-3xl underline">{data.title}</div>
			<div class="text-font-prime mt-4">{data.description}</div>
			<div class="w-full mt-8 h-full flex flex-col items-start justify-start">
				<div class="font-black text-xl">MENTOR(S)</div>
				<ul class="ml-4 mt-1">
					{#each data.mentors as value, index}
						<li class="text-font-prime font-bold py-2">{index + 1}. &nbsp;{value}</li>
					{/each}
				</ul>
			</div>
			<div class="w-full mt-8 h-full flex flex-col items-start justify-start">
				<div class="font-black text-xl">DRIVE</div>
				<div>
					{#each data.drive as value}
						<div class="text-font-prime mt-4">{value}</div>
					{/each}
				</div>
			</div>
			<div class="w-full mt-8 h-full flex flex-col items-start justify-start">
				<div class="font-black text-xl">OBJECTIVE(S)</div>
				<ul class="ml-4 mt-1">
					{#each data.objective as value, index}
						<li class="text-font-prime font-bold py-2">{index + 1}. &nbsp;{value}</li>
					{/each}
				</ul>
			</div>
			<div class="w-full mt-8 h-full flex flex-col items-start justify-start">
				<div class="font-black text-xl">TECHNICAL APPROACHES</div>
				<ul class="ml-4 mt-1">
					{#each data.technical_approch as value, index}
						<li class="text-font-prime font-bold py-2">{index + 1}. &nbsp;{value}</li>
					{/each}
				</ul>
			</div>
			<div class="w-full mt-8 h-full flex flex-col items-start justify-start">
				<div class="flex flex-row items-end justify-center">
					<div class="font-black text-xl">QUALIFICATION(S) - &nbsp;</div>
					<span>
						<a href="https://github.com/RahulNavneeth" class="underline text-sky-700 font-bold"
							>Github://RahulNavneeth</a
						></span
					>
				</div>
				<ul class="ml-4 mt-1">
					{#each data.experience as value, index}
						<li class="text-font-prime font-bold py-2">{index + 1}. &nbsp;{value}</li>
					{/each}
				</ul>
			</div>
			<div class="w-full mt-8 h-full flex flex-col items-start justify-start">
				<div class="font-black text-xl">INTERACTION WITH THE COMMUNITY</div>
				<ul class="ml-4 mt-1">
					{#each data.interaction as value, index}
						<li class="text-font-prime font-bold py-2">{index + 1}. &nbsp;{value} &#9745;</li>
					{/each}
				</ul>
			</div>
			<div class="w-full mt-8 h-full flex flex-col items-start justify-start">
				<div class="font-black text-xl">TIMELINE</div>
				<div class="font-bold ml-4 mt-1 ">
					Please visit <code class="bg-gray-200 px-2"
						><a href="/{$page.params.year}/timeline">/{$page.params.year}/timeline<a /></a></code
					> for a more detailed view of the proposed project timeline and milestones.
				</div>
			</div>
			<div class="w-full mt-16 h-full flex flex-col items-start justify-start">
				<div class="font-black text-2xl">{data.conclusion.toUpperCase()}</div>
				<div class="font-black text-2xl w-full text-center mt-10">^-^</div>
			</div>
		</div>
	</div>
</div>
