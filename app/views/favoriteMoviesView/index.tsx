import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { getFavoritesList } from '../../modules/redux/movie/selectors';
import { IStackNavigation } from '../../entities/IStackNavigation';
import { useIsFocused } from '@react-navigation/native';
import { shallowEqual, useSelector } from 'react-redux';
import { MovieType } from '../../entities/MovieType';
import { MovieInfoView } from '../movieInfoView';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
}

export const FavoriteMovieView: FC<Props> = ({ navigation, }) => {
    const styles = useMemo(() => getStyle(), []);
    const [isScreenActive, setIsScreenActive] = useState<boolean>(false)
    const isFocused = useIsFocused();
    useEffect(() => {
        setIsScreenActive(!isScreenActive)
    }, [isFocused])

    const moviesList = useSelector(getFavoritesList, shallowEqual) as Array<MovieType>;

    const renderItem = useCallback(({ item }) => (
        <MovieInfoView {...{ item, navigation }} />
    ), [moviesList]);

    return (
        <View style={styles.container}>
            <FlatList
                data={moviesList}
                renderItem={renderItem}
                style={styles.flatListContainer}
            />
        </View>
    )
};
