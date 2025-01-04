import React from 'react'
import { Text, View } from 'react-native'
import { FullMovie } from '../../../core/entities/movie.entity'
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../core/entities/cast.entity';
import { FlatList } from 'react-native-gesture-handler';
import { CastActor } from '../cast/CastActor';

interface Props {
    movie: FullMovie;
    cast: Cast[];
}

export const MovieDetail = ( { movie, cast }:Props) => {
  return (
    <>
        <View style={{ marginHorizontal: 25, marginTop: 5 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text>{ movie.rating }</Text>
                <Text style={{ marginLeft: 5}}> - { movie.genres.join(', ') } </Text>
            </View>
            <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 10 }}> 
                Historia
            </Text>
            <Text style={{ fontSize: 16, marginTop: 5, textAlign: 'justify' }}>
                { movie.description }
            </Text>
            <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 10 }}> 
                Presupuesto
            </Text>
            <Text style={{ fontSize: 18, marginTop: 5, marginBottom:18 }}>
                { Formatter.currency(movie.budget) }
            </Text>
        </View>
        
        {/* Casting */}
        <View style={{ marginBottom: 30, marginTop: 10 }}>
            <Text style={{ 
                fontSize: 23, 
                marginVertical: 10,
                fontWeight: 'bold', 
                marginHorizontal: 20
            }}> 
                Actores
            </Text>

            <FlatList 
                data={ cast } 
                keyExtractor={ (item) => item.id.toString() } 
                horizontal={ true } 
                showsHorizontalScrollIndicator={ false } 
                renderItem={ ({ item }) => <CastActor actor={ item } />}
            />

        </View>
    </>
    
  )
}
