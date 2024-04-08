import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    subtitulo: {
        textAlign: 'center',
        padding: 10, fontSize: 20,
        fontStyle: 'italic'
    },
    content: {
        flex: 1,
        top: 35,
    },
    imagePoster: {
        width: 150,
        height: 230,
        borderRadius: 5,
        alignSelf: "center",
    },
    titleMovie: {
        fontWeight: "bold",
        textAlign: "center",
        paddingLeft: 7,
        paddingRight: 7,
    },
    buttonWrapper: {
        flex: 1,
        width: "100%",
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#00C8BE',
        width: '40%',
        padding: 7,
        borderRadius: 5,
    },
    textButton: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
    lottieView: {
        position: 'absolute',
        width: 200,
        height: 200,
    },

});