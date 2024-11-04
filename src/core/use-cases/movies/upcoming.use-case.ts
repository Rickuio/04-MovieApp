import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";


export const moviesUpcomingUseCase = async ( fetcher: HttpAdapter ): Promise< Movie[] > => {

    const upcoming = await fetcher.get<NowPlayingResponse>('/upcoming');
    //console.log({upcoming});
    return upcoming.results.map( res => MovieMapper.fromMovieDBResultToEntity(res));
}

export const moviesTotalUpcomingUseCase = async ( fetcher: HttpAdapter ): Promise< number > => {

    const upcoming = await fetcher.get<NowPlayingResponse>('/upcoming');
    return upcoming.total_results;
}