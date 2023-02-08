import 'dotenv/config';
// import HttpsProxyAgent from 'https-proxy-agent';
import axios from 'axios';
// const httpsAgent = new HttpsProxyAgent({
// 	host: `${process.env.PROXY_HOST}`,
// 	port: `${process.env.PROXY_PORT}`
// });
// const axiosProxy = axios.create({ httpsAgent });
export const load = async ({ params }) => {
	const tmdbKey = process.env.TMDB_KEY;
	const searchMovies = async () => {
		const res = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&query=${params.query}&page=1`
		);
		console.log(res.data);
		return res.data.results;
	};

	return { results: searchMovies(), query: params.query };
};
