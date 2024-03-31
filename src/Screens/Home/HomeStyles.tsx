import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "rgba(0,150,150,0.5)"

    },
    imagePoster: {
        width: 90,
        height: 140,
        borderRadius: 5,
        alignSelf: "center",
        // margin: 5,
        borderWidth: 3,
        borderColor: "rgb(0,110,150)",
        resizeMode: 'contain',
    },
    postersMovies: {

    },
    titleMovie: {
        fontWeight: "bold",
        textAlign: "center",
        paddingLeft: 7,
        paddingRight: 7,
    },
    buttonContainer: {
        flex: 1,
        bottom: 10,
        width: '80%',
        alignSelf: "center",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'flex-end',


    },
    button: {
        backgroundColor: "#fff",
        padding: 5,
        width: "40%",
        alignSelf: "flex-end",
        borderRadius: 5,
        borderWidth: 1
    },
    textButton: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    }

});