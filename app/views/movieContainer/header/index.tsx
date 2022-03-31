import React, { FC, useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { addToFavorites } from '../../../modules/saga/searchMovie/actions';
import { getFavoritesList } from '../../../modules/redux/movie/selectors';
import { IStackNavigation } from '../../../entities/IStackNavigation';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { BookmarkIcon } from '../../../assets/svg/bookmarkIcon';
import { BackIcon } from '../../../assets/svg/backIcon';
import { MovieType } from '../../../entities/MovieType';
import { getStyle } from './styles';

interface Props {
    item: MovieType;
    navigation: IStackNavigation;
}

export const MovieContainerHeader: FC<Props> = ({ navigation, item }) => {
    const styles = useMemo(() => getStyle(), []);
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false)
    const dispatch = useDispatch()

    const favoriteMoviesList = useSelector(getFavoritesList, shallowEqual) as Array<MovieType>;

    useEffect(() => {
        favoriteMoviesList.map(favoriteItem => favoriteItem.id == item.id && setIsBookmarked(true))
    }, [item.id])

    const onSendBookmark = () => {
        dispatch(addToFavorites({ item }))
        setIsBookmarked(!isBookmarked)
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.iconContainer} onPress={navigation.goBack}>
                <BackIcon />
            </Pressable>
            <Text style={styles.textContainer} numberOfLines={2}>
                {item.title}
            </Text>
            <Pressable style={styles.iconContainer} onPress={onSendBookmark}>
                <BookmarkIcon color={isBookmarked ? '#0F264B' : '#fff'} />
            </Pressable>
        </View>
    )
};
