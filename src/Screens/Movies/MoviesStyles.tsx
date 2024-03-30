import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        alignItems: "center",
        backgroundColor: "#000",
        flex: 1
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '50%',
        alignSelf: 'flex-end'
    },
    input: {
        backgroundColor: "#fff",
        width: '70%',
        height: 30,
        padding: 3,
        borderRadius: 5,
        textAlign: 'center'
    },
    searchContainer: {
        backgroundColor: "#f7d354",
        alignSelf: 'center',
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 5,
    },
    textTitle: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    }
});