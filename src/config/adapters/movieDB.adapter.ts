import { MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        //api_key: '98dfe19cfd1bdbed93488ef1d2ffde4fb9',
        api_key: MOVIE_DB_KEY ?? 'no-key',
        language: 'es',
    }
});