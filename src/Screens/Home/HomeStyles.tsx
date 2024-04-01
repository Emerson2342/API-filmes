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
        top: 35
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
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    button: {
        padding: 5,
        width: "40%",
        bottom: 40,
        alignSelf: 'flex-end',
        margin: 10,
        borderRadius: 5,
        borderWidth: 1
    },
    textButton: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    }

});