import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8ff",
        alignItems: "center",
        justifyContent: "center",
    },
});

const styleheader = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7f69a5",
        border: "solid 1px",
        marginBottom: "100px",
    },
    htext: {
        fontSize: 50,
        fontWeight: "bold",
        color: "black",
    },
});
const styleapp = StyleSheet.create({
    containers: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
    },
});

const styleform = StyleSheet.create({
    container: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formContainer: {
        width: '50%'
    },
    definitivaYObservaciones: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "10px",
    },
});

const styleInputRow = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        margin: "10px",
        justifyContent: "space-between",
    },
    input: {
        padding: "5px",
    },
    errorMessage: {
        color: "red",
    },
});

const formButtons = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        margin: "10px",
        justifyContent: "space-around",
    },
    button: {
        border: "1px solid",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#7f69a5",
        color: "black",
        fontWeight: "bold",
    },
});

const tablaStyles = StyleSheet.create({
    container: {
        border: '2px solid #ccc',
        borderRadius: '10px'
    },
    titulos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '10px',
        backgroundColor: '#f2f2f2',
        marginBottom: '5px',
        border: '2px solid #ccc',
        borderRadius: '10px',
        gap: '10px',
    },
    titulo: {

    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '10px',
        backgroundColor: '#ccc',
        borderBottomWidth: '1px',
        borderBottomColor: '#f2f2f2'
    },
});

export {
    styleheader,
    styleapp,
    styleform,
    styleInputRow,
    formButtons,
    tablaStyles,
    styles,
};