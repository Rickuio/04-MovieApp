import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesPlayingUseCase = async ( fetcher: HttpAdapter ): Promise< Movie[] > => {

    try {
        
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
        //console.log({ nowPlaying })
        //return nowPlaying.results.map( result => MovieMapper.fromMovieDBResultToEntity(result) )
        return nowPlaying.results.map( MovieMapper.fromMovieDBResultToEntity )

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - NowPlaying');
        
    }
}