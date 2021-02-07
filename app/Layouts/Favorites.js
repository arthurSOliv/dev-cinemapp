import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

import Movies from '../components/Movies';

import Footer from '../components/Footer';

const Favorites = (props) => {

    const [movies, setMovies] = useState(false);

    useEffect(() => {
        setMovies(props.movies);
    }, [props.movies]);

    return  (
        <View style={styles.container}>
            <View style={styles.containerMovies}>
                    <View>
                        {movies &&
                            <Movies movies={movies} />
                        }
                    </View>
            </View>
            <Footer />
        </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',

    },

    loading: {
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerMovies: {
        flex: 1,
        paddingBottom: 50,
    },
})

function mapStateToProps(state) {
    return {
        movies: state
    }
}

export default connect(
    mapStateToProps
)(Favorites);
