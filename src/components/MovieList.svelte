<script>
	import Movie from './Movie.svelte';
	export let movies;
</script>

<header><slot /></header>
<div class="movie-list">
	{#each movies as movie}
		<Movie {movie} />
	{/each}
</div>

<style>
	.movie-list {
		width: 80%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		grid-column-gap: 2rem;
		grid-row-gap: 0.8rem;
		margin-bottom: 15px;
	}
	header {
		text-align: center;
		font-size: 1.4rem;
		font-weight: 600;
		margin: 0 auto;
		margin-bottom: 15px;
		height: 40px;
	}
</style>
