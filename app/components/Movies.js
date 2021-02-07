import React, { useState, useEffect } from 'react';

import { View, FlatList, Text } from 'react-native';

import MovieRow from '../components/MovieRow';

const Movies = (props) => {

    const [movieList, setMovieList] = useState(false);

    useEffect(() => {
        setMovieList(props.movies);
    }, [props.movies]);

    return (
        <View>
            <FlatList
                data={movieList}
                renderItem={({ item: movie}) => <MovieRow movie={movie}/>}
                keyExtractor={(movie) => movie.imdbID}
            >
            </FlatList>
        </View>
    )
}

export default Movies;
