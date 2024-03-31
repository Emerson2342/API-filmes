import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        alignItems: "center",
        backgroundColor: "rgba(0, 150, 150, 0.3)",
        flex: 1
    },
    buttonContainer: {
        paddingTop: 10,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
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

        fontSize: 30,
        fontWeight: "bold"
    },
    button: {
        backgroundColor: "#fff",
        padding: 5,
        width: "40%",
        alignSelf: "center",
        borderRadius: 5,
        borderWidth: 1
    },
    textButton: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    }
});