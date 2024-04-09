import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    },
    list: {
        width: "48%",
        margin: 5,
        borderRadius: 5,
        padding: 3,
        backgroundColor: '#fff',
        elevation: 5
    },
    content: {
        width: '100%',
        flexDirection: 'row',
    },
    buttons: {
        width: '100%',
    },
    imagePoster: {
        width: 60,
        height: 90,
        borderRadius: 5,
        alignSelf: "center",
    },
    subInfo: {
        width: '75%'
    },
    textTitle: {
        margin: 1,
        fontWeight: "bold",
        textAlign: 'center',
        color: '#000',
    },
    movieAverage: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
    },
    optionsContainer: {
        marginLeft: 5,
        marginRight: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: '#ff6666',
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center',
        marginVertical: 3,
    },
    buttonText: {
        fontWeight: 'bold',
        padding: 3,
        textAlign: 'center'
    },
    buttonVoltar: {
        backgroundColor: '#00C8BE',
        padding: 10,
        width: '50%',
        alignItems: 'center',
        borderRadius: 9,
        bottom: 10
    },
    textVoltar: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});