import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginBottom: 20,
            alignItems: 'center',
            borderBottomWidth: 0.7,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
        },
        imageContainer: {
            height: 400,
            width: '80%',
            borderRadius: 20
        },
        movieName: {
            fontSize: 22,
            lineHeight: 26,
            paddingBottom: 15
        }
    });
    return styles;
};
