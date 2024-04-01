import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: '#fff',

    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '90%',
        alignSelf: 'flex-end',
        margin: '5%',
    },
    input: {
        backgroundColor: "#fff",
        width: '75%',
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
        fontWeight: "bold"
    },
    buttonContainer: {

        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#00C8BE',
        padding: 10
    },
    button: {
        backgroundColor: "#fff",
        padding: 5,
        width: "40%",
        borderRadius: 5,
        borderWidth: 1,

    },
    textButton: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    }
});