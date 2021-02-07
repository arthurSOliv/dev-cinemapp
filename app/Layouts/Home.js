import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import Footer from '../components/Footer';

const Home = () => {

    return  (
        <View style={styles.container}>
            <View style={styles.middle}>
                <Text style={styles.title}>DuxMovies</Text>
                <Text style={styles.subtitle}>App desenvolvido com React Native, Redux e Axios, onde se pode buscar e adicionar filmes aos favoritos</Text>
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

    middle: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 34,
        fontWeight: '600',
        marginBottom: 20
    },

    subtitle: {
        width: '90%',
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center'
    }
})

export default Home;
