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
    buttonContainer: {
        zIndex: -1,
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: -95,
        flexDirection: "row",
    },
    textButton: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        top: 87
    },
    buttonWrapper: {
        width: "50%",
        alignSelf: 'center',
    },
    lottieView: {
        position: 'absolute',
        width: 200,
        height: 200,
    },

});