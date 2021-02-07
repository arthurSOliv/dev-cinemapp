import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { View, Text, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const MovieRow = (props) => {

    const [movieItem, setMovieItem] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setMovieItem(props.movie);
    }, []);

    async function add(fav) {
        fav.fav = true;
        setLoading(true);
        await setMovieItem(fav);
        const { addFavorite } = props;
        await addFavorite(fav);
        setLoading(false);
    }

    async function remove(fav) {
        fav.fav = false;
        setLoading(true);
        await setMovieItem(fav);
        const { removeFavorite } = props;
        await removeFavorite(fav);
        setLoading(false);
    }

    return (
        <>
            {movieItem &&
                <View style={styles.container}>
                    <Image source={{uri: movieItem.Poster}} style={styles.poster}/>
                    <Text style={styles.title}>{movieItem.Title}</Text>
                    {loading
                        ?
                        <View style={styles.iconContainer}>
                            <Icon name="spinner" size={35} color='blue' onPress={() => remove(movieItem)}/>
                        </View>
                        :
                        <View style={styles.iconContainer}>
                            {movieItem.fav
                                ?
                                    <Icon name="heart" size={35} color='red' onPress={() => remove(movieItem)}/>
                                :
                                    <Icon name="heart-o" size={35} color='yellow' onPress={() => add(movieItem)}/>
                            }
                        </View>
                    }
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',

    },

    iconContainer: {
        flex: 1,
        alignItems: 'center',
    },

    poster: {
        height: 100,
        width: 70,
        resizeMode: 'contain',

    },

    title: {
        flex: 2,
        fontSize: 22,
        fontWeight: '400',
        marginLeft: 10,
    }
})

function mapStateToProps(state) {
    return {
        movies: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addFavorite: (movies) => dispatch({ 
            type: 'ADD_FAVORITES', 
            payload: { movies }
        }),
        removeFavorite: (movies) => dispatch({ 
            type: 'REMOVE_FAVORITES', 
            payload: { movies }
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieRow);
