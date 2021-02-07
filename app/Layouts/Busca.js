import React, { useState } from 'react';

import { connect } from 'react-redux';

import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

import Movies from '../components/Movies';

import Footer from '../components/Footer';

import axios from 'axios';

const Busca = (props) => {

    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState(false);
    const [loading, setLoading] = useState(false);

    function onChangeText(text){
        setSearch(text);
    }

    async function searchMovie(){
        setLoading(true)
        const response = await axios.get(`http://www.omdbapi.com/?apikey=925eba28&s=${search}`);
        await response.data.Search.map(item => {
            const isFav = props.movies.find(fav => fav.imdbID === item.imdbID);
            if(isFav) {
                item.fav = true;
            } else {
                item.fav = false;
            }
            
        })
        await setMovies(response.data.Search);
        setLoading(false)
    }

    return  (
        <View style={styles.container}>
            <View style={styles.containerMovies}>
                <View>
                    <TextInput
                        style={{ height: 60, fontSize: 20 }}
                        onChangeText={text => onChangeText(text)}
                        placeholder="Digite o nome do filme"
                    />
                    <Button color="#5CB7F4" title="Buscar" onPress={()=> searchMovie()} />
                </View>
                {loading
                    ?
                    <View style={styles.loading}>
                        <Text>Buscando...</Text>
                    </View>
                    :
                    <View>
                        {movies &&
                            <Movies movies={movies} />
                        }
                    </View>
                }
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
)(Busca);
