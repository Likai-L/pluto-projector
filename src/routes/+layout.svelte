<script>
	let y;
	import { slide, fade } from 'svelte/transition';
</script>

{#if y < 300}
	<nav in:slide out:slide>
		<a href="/">
			<img
				src="https://see.fontimg.com/api/renderfont4/w14z2/eyJyIjoiZHciLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzA5MDkwOSIsImJnYyI6IiMwQzBDMEMifQ/UGx1dG8gUHJvamVjdG9y/70sdiscopersonaluse-bold.png"
				alt=""
				class="logo"
				in:fade
				out:fade
				on:load={() => {}}
			/></a
		>
	</nav>
{/if}

<svelte:window bind:scrollY={y} />

<slot />

<style lang="scss">
	a {
		width: 50%;
		max-width: 500px;
		min-width: 300px;
		.logo {
			width: 100%;
			line-height: 2em;
			border-radius: 0.4em;
			text-align: center;
			background-color: black;
			color: white;
		}
	}

	nav {
		z-index: 10;
		height: 110px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		position: fixed;
		top: 0;
		background-color: rgb(0, 0, 0);
	}
</style>
