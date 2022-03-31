import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { selectIsActivityIndicatorActive, selectMovieList } from '../../modules/redux/movie/selectors';
import { authApp, searchMovie } from '../../modules/saga/searchMovie/actions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { IStackNavigation } from '../../entities/IStackNavigation';
import { SearchHeader } from '../../components/searchHeader';
import { MovieType } from '../../entities/MovieType';
import { MovieInfoView } from '../movieInfoView';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
}

export const SearchMovieView: FC<Props> = ({ navigation }) => {
    const styles = useMemo(() => getStyle(), []);
    const [movieName, setMovieName] = useState<string>('')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authApp())
    }, [])

    const moviesList = useSelector(selectMovieList, shallowEqual) as Array<MovieType>;
    const isActivityIndicatorActive = useSelector(selectIsActivityIndicatorActive, shallowEqual)

    const renderItem = useCallback(({ item }) => (
        <MovieInfoView {...{ item, navigation }} />
    ), [moviesList]);

    const onSearch = () => {
        dispatch(searchMovie({ movieName }))
    }

    return (
        <View style={styles.container}>
            <SearchHeader {...{ movieName, setMovieName, onSearch }} />
            {isActivityIndicatorActive
                ? <View style={styles.indicatorContainer}><ActivityIndicator size={'large'} color={'#ee65e7'} /></View>
                : <></>}
            <FlatList
                data={moviesList}
                renderItem={renderItem}
                style={styles.flatListContainer}
            />
        </View>
    )
};
