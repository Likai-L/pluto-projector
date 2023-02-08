import 'dotenv/config';
// import HttpsProxyAgent from 'https-proxy-agent';
import axios from 'axios';
// const httpsAgent = new HttpsProxyAgent({
// 	host: `${process.env.PROXY_HOST}`,
// 	port: `${process.env.PROXY_PORT}`
// });
// const axiosProxy = axios.create({ httpsAgent });
export const load = async () => {
	const tmdbKey = process.env.TMDB_KEY;
	const getPopularMovies = async () => {
		const res = await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US&page=1`
		);
		return res.data.results;
	};

	const getTopRatedMovies = async () => {
		const res = await axios.get(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US&page=1`
		);
		return res.data.results;
	};

	return {
		popularMovies: getPopularMovies(),
		topRatedMovies: getTopRatedMovies()
	};
};
