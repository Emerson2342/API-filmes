import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: "48%",
        justifyContent: 'center',
        alignItems: 'center',

        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 3,
        elevation: 3,
        backgroundColor: '#fff',
    },
    list: {
        flexDirection: 'row',
        borderRadius: 5,
        width: "95%",
        overflow: "hidden",
        padding: 3,
    },
    imagePoster: {
        width: 60,
        height: 90,
        borderRadius: 5,
        alignSelf: "center",
    },
    textTitle: {
        fontWeight: "bold",
        padding: 1,
        textAlign: 'center',
        width: "70%",
        color: '#000'
    },
    movieAverage: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        width: '68%',
        color: '#f7d354'
    },
    detalhesButton: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    button: {
        width: "90%",
        backgroundColor: "#00C8BE",
        alignSelf: 'center',
        borderRadius: 3,
        alignItems: 'center',
        borderWidth: 1
    }
});