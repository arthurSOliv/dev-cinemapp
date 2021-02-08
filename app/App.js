import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import favoritesReducer from './store/reducers';

import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './router/index';

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
