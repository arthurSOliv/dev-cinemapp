import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Layouts/Home';
import Buscar from '../Layouts/Busca';
import Favorites from '../Layouts/Favorites';

const Auth = createStackNavigator();

const Routes = () => {
    return (
        <Auth.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#5CB7F4',
                },
                headerTintColor: '#000',
                cardStyle: { backgroundColor: '#fff' },
            }}
        >
            <Auth.Screen name="Home" component={Home} />
            <Auth.Screen name="Buscar" component={Buscar} />
            <Auth.Screen name="Favoritos" component={Favorites} />
        </Auth.Navigator>
    )
};

export default Routes;