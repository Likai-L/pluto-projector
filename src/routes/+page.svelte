<script>
	import './global.scss';
	export let data;
	let { popularMovies, topRatedMovies } = data;
	import MovieList from '../components/MovieList.svelte';
	import SearchBar from '../components/SearchBar.svelte';
</script>

<SearchBar />
<MovieList movies={popularMovies}>What's popular</MovieList>
<MovieList movies={topRatedMovies}>Top Rated</MovieList>
