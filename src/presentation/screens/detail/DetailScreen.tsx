import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetail } from '../../components/movie/MovieDetail';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Detail'>{};

export const DetailScreen = ({ route }: Props) => {

  const { movieId } = route.params;
  //const { movieId } = useRoute().params;
  console.log(movieId);
  const { isLoading, movie, cast = [] } = useMovie(movieId);
  if (isLoading) {
    return <FullScreenLoader />
  }

  return (
    <ScrollView>
        
        {/* Header:   <MovieHeader movie = { movie! } />  */}
        <MovieHeader 
          originalTitle={ movie!.originalTitle }
          poster={ movie!.poster } 
          title={ movie!.title }
        />

        {/* Details */}
        <MovieDetail movie={ movie! } cast={ cast } />

    </ScrollView>
  )
}
