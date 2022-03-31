import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        imageContainer: {
            width: '80%',
            height: 400,
            borderRadius: 20,
            marginTop: 10
        },
        infoAboutMovie: {
            textAlign: 'center',
            fontSize: 20,
            lineHeight: 24,
            color: '#000',
            paddingTop: 10
        }
    });
    return styles;
};
