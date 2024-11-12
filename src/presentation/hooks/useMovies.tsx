import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"

import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

let popularPageNumber = 1;

export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);

    useEffect(() => {
      initialLoad();
    }, [])

    const initialLoad = async() => {

        const nowPlayingMovies = await UseCases.moviesPlayingUseCase( movieDBFetcher );
        const popularPromise = UseCases.moviesPopularUseCase( movieDBFetcher );
        const topRatedPromise = UseCases.moviesTopRatedUseCase( movieDBFetcher );
        const upcomingPromise = UseCases.moviesUpcomingUseCase( movieDBFetcher );
        const upcomingTotal = await UseCases.moviesTotalUpcomingUseCase( movieDBFetcher );
        //console.log(nowPlayingMovies[1])

        const [
          popularMovies,
          topRatedMovies,
          upcomingMovies,
        ] = await Promise.all([ 
          popularPromise,
          topRatedPromise,
          upcomingPromise
         ]);
        
         setNowPlaying(nowPlayingMovies);
         setPopular(popularMovies);
         setTopRated(topRatedMovies);
         setUpcoming(upcomingMovies);

         setisLoading(false);
         
         console.log('\n Total: ' + upcomingTotal);
         //console.log({ nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies });
         //console.log({popularMovies});

    }

    return { isLoading, nowPlaying, popular, topRated, upcoming, 
      //Methods
      popularNextPage: async() => {
        popularPageNumber++;
        const popularMovies = await UseCases.moviesPopularUseCase( movieDBFetcher, {
          page: popularPageNumber,
        } );
        setPopular( prev => [...prev, ...popularMovies] );
      }
    }

}
