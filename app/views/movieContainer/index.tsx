import React, { FC, useMemo } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { IStackNavigation } from '../../entities/IStackNavigation';
import { MovieContainerHeader } from './header';
import { IRoute } from '../../entities/IRoute';
import { LINKS } from '../../config';
import { getStyle } from './styles';

interface Props {
    navigation: IStackNavigation;
    route: IRoute;
}

export const MovieContainer: FC<Props> = ({ navigation, route }) => {
    const styles = useMemo(() => getStyle(), []);
    const { item } = route.params

    return (
        <View style={styles.container}>
            <MovieContainerHeader {...{ navigation, item }} />
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <Image source={{ uri: LINKS.GET_IMAGE + item.poster_path }} style={styles.imageContainer} resizeMode={'contain'} />
                <Text style={styles.infoAboutMovie}>
                    OverView: {item.overview}
                </Text>
                <Text style={styles.infoAboutMovie}>
                    Vote: {item.vote_average}
                </Text>
                <Text style={styles.infoAboutMovie}>
                    Release date: {item.release_date.split("-").reverse().join("-")}
                </Text>
                <Text style={styles.infoAboutMovie}>
                    Percentage of popularity: {item.popularity}%
                </Text>
            </ScrollView>
        </View>
    )
};
