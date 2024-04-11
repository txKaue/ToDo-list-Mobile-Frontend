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
        color: "#120A8F",
        marginBottom: 10,
        fontWeight: "bold",
    },
    input: {
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#120A8F",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4d5156",
    },
    buttonRegister:{
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#120A8F",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonRegister:{
        color: "#ffffff",
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
        color: "#4d5156",
    },
    linkSubscribe: {
        color:"#120a8f",
        fontSize: 16
    }
})

export default styles;