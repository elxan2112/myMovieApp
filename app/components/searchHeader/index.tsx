import React, { FC, useMemo } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { SearchIcon } from '../../assets/svg/searchIcon';
import { getStyle } from './styles';

interface Props {
    movieName: string;
    setMovieName: (data: string) => void
    onSearch: () => void
}

export const SearchHeader: FC<Props> = ({ movieName, setMovieName, onSearch }) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <TextInput
                value={movieName}
                onChangeText={setMovieName}
                style={styles.textInputView}
            />
            <Pressable style={({ pressed }) => ([{ ...styles.iconView, opacity: pressed ? 0.5 : 1 }])} onPress={onSearch}>
                <SearchIcon />
            </Pressable>
        </View>
    )
};
