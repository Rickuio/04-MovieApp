import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

interface Options {
    page?: number;
    limit?: number;
}


export const moviesPopularUseCase = async ( fetcher: HttpAdapter, options?: Options ): Promise< Movie[] > => {

    try {
        console.log({page: options?.page ?? 1});
        const popular = await fetcher.get<PopularResponse>('/popular', {
            params: {
                page: options?.page ?? 1
            }
        });
        //console.log({upcoming});
        return popular.results.map( result => MovieMapper.fromMovieDBResultToEntity(result));
    
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - PopularUseCase');
        
    }

}
