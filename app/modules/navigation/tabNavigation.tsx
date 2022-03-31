import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoritesListIcon } from '../../assets/svg/favoritesListIcon';
import { FavoriteMovieView } from '../../views/favoriteMoviesView';
import { SearchMovieView } from '../../views/searchMoviesView';
import { SearchIcon } from '../../assets/svg/searchIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator: FC = () => {

    return (
        <Tab.Navigator initialRouteName="SearchMovieView" screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tab.Screen name="SearchMovieView" component={SearchMovieView} options={{
                tabBarTestID: "SearchMovieView",
                tabBarAccessibilityLabel: 'SearchMovieView',
                tabBarIcon: ({ color }) => (
                    <SearchIcon color={color} />
                ),
                tabBarHideOnKeyboard: true
            }}
            />
            <Tab.Screen name="FavoriteMovieView" component={FavoriteMovieView} options={{
                tabBarTestID: 'FavoriteMovieView',
                tabBarAccessibilityLabel: 'FavoriteMovieView',
                tabBarIcon: ({ color }) => (
                    <FavoritesListIcon color={color} />
                )
            }}
            />
        </Tab.Navigator>
    );
};
