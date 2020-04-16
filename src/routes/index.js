import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const Stack = createStackNavigator();

const Routes = () => (
    <>
        <StatusBar barStyle="light-content" />
        <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    </>
);

export default Routes;