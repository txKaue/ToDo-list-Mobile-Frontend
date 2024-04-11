import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import style from "./style";
import { FIREBASE_DB } from "../../config/FirebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const Details = ({navigation, route}) => {

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)

    const idTask = route.params.id

    async function editTask(description, id) {
        try {
            const taskRef = doc(FIREBASE_DB, route.params.idUser, id);
            await updateDoc(taskRef, {
                description: description
            });
            navigation.navigate("Task");
        } catch (error) {
            console.error("Error editing task: ", error);
        }
    }


    return (
        <View style={style.container}>
            <Text style={style.label}>Description</Text>
            <TextInput style={style.input} placeholder="Ex: Estudar Python" onChangeText={text => setDescriptionEdit(text)} value={descriptionEdit} />
            <TouchableOpacity style={style.buttonNewTask} onPress={() => { editTask(descriptionEdit, idTask) }}>
                <Text style={style.iconButton}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Details