<script lang="ts">
	export let titleContent: string;
</script>

<section class="h-80 rounded-lg m-5 grid grid-flow-col col-span-2s">
	<div class="w-1/2 rounded-lg grid justify-self-stretch">
		<header class="rounded-lg font-semibold">{titleContent}</header>
		<p class="text-2xl rounded-lg font-extrabold">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam.
		</p>
		<div class="rounded-lg grid grid-flow-col justify-normal content-around">
			<button class="outline-dotted bg-blue-500 rounded-lg p-2 m-5">View News</button>
			<button class=" outline-dotted bg-white rounded-lg p-2 m-5">Subscribe</button>
		</div>
	</div>
	<img class="rounded-lg w-1/2 grid justify-self-stretch" alt="LandPage IMG" />
</section>
