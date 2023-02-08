<script>
	export let data;
	console.log(data);
	import MovieDetail from '../../components/MovieDetail.svelte';
</script>

<MovieDetail details={data} />
