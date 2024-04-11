import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        paddingTop: 20,

    },
    iconButton:{
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold"
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
    DescriptionTask:{
        width: "75%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5cf",
        paddingHorizontal: 20,
        padding: 12,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "#282b2db5",
    },
    deleteTask:{
        justifyContent: "center",
        paddingLeft: 15,  
    },
    Tasks:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    }
})

export default styles;