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
        width: '98%',
        flexDirection: 'row',
        justifyContent: "space-between",
        flexWrap: 'wrap',
        alignSelf: 'center'
    },
    generoButton: {
        backgroundColor: '#00C8BE',
        padding: 5,
        marginVertical: 3,
        marginHorizontal: 3,
        borderRadius: 3,
    },
    buttonWrapper: {
        flex: 1,
        width: "100%",
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginBottom: 20
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
        alignSelf: 'center',
        width: 200,
        height: 200,
    },
});