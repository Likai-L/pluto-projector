<script>
	import { decodeBlurHash } from 'fast-blurhash';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	export let details;
	const baseUrl = 'http://image.tmdb.org/t/p/original';
	const { backdrop_path, overview, release_date, title, vote_average, hash } = details.movieDetails;
	onMount(() => {
		console.log(hash);
		const pixels = decodeBlurHash(hash, 705, 396);
		const canvas = document.getElementById('blurhash');
		const ctx = canvas.getContext('2d');
		const imageData = ctx.createImageData(705, 396);
		imageData.data.set(pixels);
		ctx.putImageData(imageData, 0, 0);
	});
	let imgClass = 'hide';
	let canvasClass = '';
</script>

<div class="img-container">
	<img
		in:fly={{ y: 50, duration: 500 }}
		class={imgClass}
		src={`${baseUrl}${backdrop_path}`}
		alt="back-drop"
		on:load={() => {
			canvasClass = 'hide';
			imgClass = '';
		}}
	/>
	<canvas id="blurhash" width="705" height="396" class={canvasClass} />
</div>

<h2>{title}</h2>
<div class="info">
	<div>
		<div class="release-date">{release_date}</div>
		<div class="rating-container">
			<span class="TMDB">TMDB </span>
			<span class="socre">{vote_average.toFixed(1)}</span>
		</div>
	</div>
	<p class="overview">{overview}</p>
</div>

<style lang="scss">
	h2 {
		font-family: 'Poppins', sans-serif;
		text-align: center;
	}
	* {
		font-family: 'Lato', sans-serif;
	}

	.img-container {
		width: 50%;
		min-width: 400px;
		margin: 20px auto;
		margin-top: 160px;
		border-radius: 20px;
	}

	.hide {
		display: none;
	}
	img,
	canvas {
		width: 100%;
		border-radius: 20px;
	}

	.info {
		font-size: 18px;
	}

	.overview {
		line-height: 25px;
		text-align: left;
		width: 50%;
		margin: 30px auto;
	}

	.TMDB {
		background: linear-gradient(to right, #90cea1, #01b4e4);
		-webkit-background-clip: text;
		color: transparent;
	}

	.socre {
		color: orange;
		margin-left: 0.3em;
	}

	.rating-container {
		font-weight: 700;
		font-size: 1.1rem;
		background-color: #0d253f;
		width: 100px;
		height: 1.5em;
		text-align: center;
		margin: 0 auto;
		line-height: 1.5em;
		border-radius: 8px;
	}

	.release-date {
		text-align: center;
		margin-bottom: 20px;
		opacity: 0.6;
	}
</style>
