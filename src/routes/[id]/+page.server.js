import 'dotenv/config';
import HttpsProxyAgent from 'https-proxy-agent';
import axios from 'axios';
import { encodeImageToBlurhash } from '../../helpers';
const httpsAgent = new HttpsProxyAgent({
	host: `${process.env.PROXY_HOST}`,
	port: `${process.env.PROXY_PORT}`
});

const axiosProxy = axios.create({ httpsAgent });
export const load = async ({ params }) => {
	const tmdbKey = process.env.TMDB_KEY;
	const getMovieDetails = async () => {
		const res = await axiosProxy.get(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${tmdbKey}`
		);
		const details = res.data;
		const baseUrl = 'http://image.tmdb.org/t/p/w300';
		const hash = await encodeImageToBlurhash(`${baseUrl}${details.backdrop_path}`);
		console.log('hash:', hash);
		details.hash = hash;
		return details;
	};

	return {
		movieDetails: getMovieDetails()
	};
};
