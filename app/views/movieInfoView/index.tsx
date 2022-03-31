import React, { FC, useMemo } from 'react';
import { Image, Pressable, Text } from 'react-native';
import { IStackNavigation } from '../../entities/IStackNavigation';
import { LINKS } from '../../config';
import { getStyle } from './styles';
import { MovieType } from '../../entities/MovieType';

interface Props {
    navigation: IStackNavigation;
    item: MovieType
}

export const MovieInfoView: FC<Props> = ({ navigation, item }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <Pressable style={({ pressed }) => ([{ ...styles.container, opacity: pressed ? 0.5 : 1 }])} onPress={() => navigation.navigate('MovieContainer', { item })}>
            <Image style={styles.imageContainer} source={{ uri: LINKS.GET_IMAGE + item.poster_path }} />
            <Text style={styles.movieName}>
                {item.title}
            </Text>
        </Pressable>
    )
};
