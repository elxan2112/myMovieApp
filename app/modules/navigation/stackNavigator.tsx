import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MovieContainer } from '../../views/movieContainer';
import { BottomTabNavigator } from './tabNavigation';

const Stack = createStackNavigator();

export const SearchStackNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName='BottomTabNavigator'>
            <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='MovieContainer' component={MovieContainer} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
