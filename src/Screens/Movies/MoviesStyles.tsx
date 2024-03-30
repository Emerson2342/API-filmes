import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        alignItems: "center",
        backgroundColor: "rgba(0, 150, 150, 0.5)",
        //backgroundColor: "#000",
        flex: 1
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '50%',
        alignSelf: 'flex-end',
        margin: 10
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
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1

    },
    textTitle: {
        //  color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    },
    buttonContainer: {
        paddingTop: 10,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
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