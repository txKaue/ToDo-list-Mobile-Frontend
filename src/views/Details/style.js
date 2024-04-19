import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        paddingTop: 20,

    },
    label:{
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        color: "#120A8F"
    },
    titulo:{
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 22,
        color: "#120A8F"
    },
    input:{
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        marginLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#120A8F",
        marginLeft: "auto",
        marginRight: "auto"
    },
    buttonNewTask:{
        position: "absolute",
        width: 60,
        height: 60,
        bottom: 30,
        left: 20,
        backgroundColor: "#120A8F",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    iconButton:{
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold"
    }

})

export default styles;