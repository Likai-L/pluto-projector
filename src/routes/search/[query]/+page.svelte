<script>
	export let data;
	console.log('browser', data.results[0]);
	import MovieList from '../../../components/MovieList.svelte';
	import '../../global.scss';
	import SearchBar from '../../../components/SearchBar.svelte';
	let { query, results } = data;
	$: results = data.results;
	$: query = data.query;
</script>

<SearchBar {query} />
<MovieList movies={results}>Search Results for "{`${query}`}"</MovieList>
