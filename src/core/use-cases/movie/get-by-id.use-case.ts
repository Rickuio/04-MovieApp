import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMovie } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";


export const getMovieByIdUseCase = async (
    fetcher: HttpAdapter, 
    movieId: number 
): Promise<FullMovie>  => {
    try {
        const movie = await fetcher.get<MovieDBMovie>(`/${ movieId }`);
        //console.log(movie); imprime detalle de la pelicula
        const fullMovie = MovieMapper.fromMovieDBToEntity(movie);
        return fullMovie;
    } catch (error) {
        throw new Error(`Cannot get movie by id: ${movieId}`);
    }
}