import Reac, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FIREBASE_DB } from "../../config/FirebaseConfig";
import style from "./style";
import { addDoc, collection } from "firebase/firestore";

const NewTask = ({navigation, route}, props) => {
    const [description, setDescription] = useState(null)

    async function addTask() {
        try {
            await addDoc(collection(FIREBASE_DB, route.params.idUser), {
                description: description,
                status: false
            });
            navigation.navigate("Task");
        } catch (error) {
            console.error("Error adding task: ", error);
        }
    }



    return (
        <View style={style.container}>
            <Text style={style.label}>Description</Text>
            <TextInput style={style.input} placeholder="Ex: Estudar Python" onChangeText={setDescription} value={description} />
            <TouchableOpacity style={style.buttonNewTask} onPress={() => { addTask() }}>
                <Text style={style.iconButton}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewTask