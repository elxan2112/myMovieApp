import { StyleSheet } from 'react-native';

export const getStyle = () => {

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginTop: 5
        },
        iconContainer: {
            width: 25,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textContainer: {
            fontSize: 20,
            lineHeight: 24,
            flex: 1,
            textAlign: 'center',
            flexWrap: 'wrap',
            color: '#000'
        }
    });
    return styles;
};
