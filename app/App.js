import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './router/index';

function addFavorites(state, payload) {
    state.push(payload.movies);
    return state;
}

function removeFavorites(state, payload) {
    const remaining = state.filter(item => {
        return item.imdbID !== payload.movies.imdbID;
    })

    return remaining;
}

function favoritesReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_FAVORITES':
            return addFavorites(state, action.payload);
        case 'REMOVE_FAVORITES':
            return removeFavorites(state, action.payload);
        default:
            return state
    }
}

const store = createStore(favoritesReducer);
const App = () => {
    return (
        <NavigationContainer>
            <View style={{ flex: 1 }}>
                <Provider store={store}>
                    <Routes />
                </Provider>
            </View>
        </NavigationContainer>
    )
}

export default App;
