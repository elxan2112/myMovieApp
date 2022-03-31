import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        flatListContainer: {
            marginTop: 5
        }
    });
    return styles;
};
