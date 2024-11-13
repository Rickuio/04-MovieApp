import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';

interface Props extends StackScreenProps<RootStackParams, 'Detail'>{};

export const DetailScreen = ({ route }: Props) => {

  const { movieId } = route.params;
  //const { movieId } = useRoute().params;
  //console.log(movieId);
  const { isLoading,movie } = useMovie(movieId);
  if (isLoading) {
    return <Text>Loading</Text>
  }

  return (
    <View>
        {/* Header */}
        <MovieHeader movie={ movie! } />

        {/* Details */}
    </View>
  )
}
