import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#fff',

    },
    inputContainer: {
        flexDirection: "row",

        width: '95%',
        alignSelf: 'center',
        margin: '5%',
    },
    input: {
        backgroundColor: "#fff",
        width: '95%',
        height: 30,
        padding: 1,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 15,
        borderWidth: 1
    },
    searchContainer: {
        backgroundColor: "#f7d354",
        width: "20%",
        height: 30,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1
    },
    textTitle: {
        top: -20,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center'
    },
    generosContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: "space-around",
        flexWrap: 'wrap'
    },
    generoButton: {
        backgroundColor: '#00C8BE',
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5,
        borderRadius: 5,
        elevation: 10

    },
    textButton: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        top: 87
    },
    buttonWrapper: {
        zIndex: 1,
        top: 40,
        width: "50%",
        alignSelf: 'center',
    },
    lottieView: {
        position: 'absolute',
        width: 200,
        height: 200,
    },
});