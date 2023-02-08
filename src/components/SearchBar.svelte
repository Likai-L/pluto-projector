<script>
	export let query;
	let focused = false;
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	const handleSubmit = () => {
		goto(`/search/${query}`);
	};
</script>

<form class="search-form" on:submit|preventDefault={handleSubmit}>
	{#if !focused && !query}
		<label for="search-bar" in:fade out:fade>What movie to checkout?</label>
	{/if}
	<input
		type="text"
		id="search-bar"
		bind:value={query}
		on:focus={() => (focused = true)}
		on:blur={() => (focused = false)}
	/>
	<button type="submit" id="search-bar-submit">Search</button>
</form>

<style lang="scss">
	.search-form {
		position: relative;
		width: 60%;
		max-width: 500px;
		height: 2.6rem;
		border-radius: 0.5rem;
		background-color: white;
		margin: 0 auto;
		margin-top: 170px;
		margin-bottom: 50px;
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.16);
		transition: all 1s ease-out;

		label {
			position: absolute;
			font-size: 0.8rem;
			left: 1em;
			top: 50%;
			transform: translate(0, -50%);
			color: rgb(123, 123, 123);

			&:hover {
				cursor: text;
			}
		}

		#search-bar {
			border: none;
			background-color: transparent;
			width: 70%;
			margin-left: 1em;
			&:focus {
				outline: none;
			}
		}
		#search-bar-submit {
			width: 20%;
			min-width: 60px;
			border: none;
			background-color: black;
			color: white;
			font-weight: 600;
			&:hover {
				cursor: pointer;
			}
		}
	}
</style>
