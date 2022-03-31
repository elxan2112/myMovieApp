import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            paddingTop: 10,
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 25,
            justifyContent: 'space-between',
        },
        textInputView: {
            flex: 1,
            borderWidth: 1,
            borderRadius: 40,
            borderColor: '#464647',
        },
        iconView: {
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
        },
        headerName: {
            fontSize: 18,
            lineHeight: 22,
            color: 'black',
        }
    });
    return styles;
};
