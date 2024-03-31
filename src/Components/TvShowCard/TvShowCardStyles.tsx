import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: "48%",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#000",
        marginVertical: 2,
        marginHorizontal: 2,
        borderRadius: 3,
        backgroundColor: "rgba(0, 0, 0, 0.7)"
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
        // resizeMode: 'contain',
    },
    textTitle: {
        fontWeight: "bold",
        padding: 1,
        textAlign: 'center',
        width: "70%",
        color: '#fff'
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
        backgroundColor: "#f7d354",
        alignSelf: 'center',
        borderRadius: 3,
        alignItems: 'center',
        borderWidth: 1
    }
});