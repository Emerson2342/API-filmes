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
        width: 90,
        height: 140,
        borderRadius: 5,
        alignSelf: "center",
        borderWidth: 3,
        borderColor: "rgb(0,110,150)",
        resizeMode: 'contain',
    },

    titleMovie: {
        fontWeight: "bold",
        textAlign: "center",
        paddingLeft: 7,
        paddingRight: 7,
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        top: -35,
        paddingBottom: 15,
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
        alignSelf: 'center'
    },
    lottieView: {
        position: 'absolute',
        width: 200,
        height: 200,
    },

});