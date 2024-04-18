import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        paddingTop: Platform.OS === "ios" ? 0 : 50,
    },
    title: {
        fontSize: 30,
        color: "#FF0000",
        marginBottom: 10,
        fontWeight: "bold",
    },
    input: {
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#FF0000",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4d5156",
    },
    buttonRegister:{
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF0000",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonRegister:{
        color: "#A52A2A",
        fontWeight: "bold",
        fontSize: 17,
    },
    contextAlert:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",   
    },
    warningAlert:{
        paddingLeft: 10,
        color:  "#bdbdbd",
        fontSize: 16,
    },
    login:{
        marginTop: 20,
        color: "#A52A2A",
    },
    linkSubscribe: {
        color:"#A52A2A",
        fontSize: 16
    }
})

export default styles;