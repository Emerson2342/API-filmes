import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 2,
        marginHorizontal: 1,
        borderRadius: 5,
        width: "49%",
        borderWidth: 1,
        height: 120,
        borderColor: "#fff",
        overflow: "hidden",
        backgroundColor: "#000"

    },
    imagePoster: {
        width: 60,
        height: 90,
        borderRadius: 5,
        alignSelf: "center"
        // resizeMode: 'contain',
    },
    textTitle: {
        fontWeight: "bold",
        padding: 3,
        textAlign: 'center',
        width: "70%",
        color: '#fff'
    },
    movieAverage: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        width: '69%',
        color: '#f7d354'
    },
    detalhesButton: {
        flex: 1,
        justifyContent: 'flex-end',
        // width: '69%',
    },
    detalhesText: {
        textAlign: 'center',

    },
    button: {
        bottom: 5,
        width: '50%',
        backgroundColor: "#f7d354",
        alignSelf: 'center',
        borderRadius: 3,
        left: -30


    }
});