import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '8dfe19cfd1bdbed93488ef1d2ffde4fb',
        language: 'es',
    }
});