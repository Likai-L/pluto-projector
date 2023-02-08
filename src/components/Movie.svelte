<script>
	export let movie;
	const baseUrl = 'http://image.tmdb.org/t/p/';
	let skeletonClass = 'skeleton';
	let posterImage = {};
	let src = `${baseUrl}/w500/${movie.poster_path}`;
	$: {
		skeletonClass = posterImage.complete ? '' : 'skeleton';
	}

	const handleError = (event) => {
		src = '/Image-not-found.png';
	};

	const formatDate = (date) => {
		if (!date) return;

		const dateArr = date.split('-');
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];
		let month = dateArr[1];

		months.forEach((val, index) => {
			if (index + 1 === Number(month)) {
				month = months[index];
			}
		});

		return `${month} ${dateArr[2]}, ${dateArr[0]}`;
	};
</script>

<div class="movie-card">
	<div class={`img-container ${skeletonClass}`}>
		<a href={`/${movie.id}`} id="detail-link">
			<img
				{src}
				alt="poster"
				on:load={() => {
					skeletonClass = '';
				}}
				on:error={handleError}
				bind:this={posterImage}
			/></a
		>
	</div>
	<a href={`/${movie.id}`} class={`movie-title ${skeletonClass}`}>{movie.title}</a>
	<p class={`release-date ${skeletonClass}`}>{formatDate(movie.release_date)}</p>
</div>

<style lang="scss">
	.img-container {
		width: 100%;
		aspect-ratio: 686/1086;
	}
	img {
		width: 100%;
		border-radius: 0.8rem;
		display: block;
	}

	.movie-title {
		text-align: center;
		font-size: 0.9em;
		font-weight: 600;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		overflow: hidden;
		margin-top: 0.5em;
		text-decoration: none;
		color: inherit;
		height: 1.2rem;
	}

	.release-date {
		font-size: 0.8em;
		color: rgb(94, 94, 94);
		text-align: center;
		margin-top: 0.3em;
		height: 1.2rem;
	}

	.skeleton {
		position: relative;
	}
	.skeleton::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, #eee, #f9f9f9, #eee);
		background-size: 200%;
		border-radius: 0.5rem;
		z-index: 5;
		animation: skeleton-loading 1s infinite reverse linear;
	}

	@keyframes skeleton-loading {
		0% {
			background-position: -100% 0;
		}
		100% {
			background-position: 100% 0;
		}
	}
</style>
