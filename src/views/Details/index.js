import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import style from "./style";

const Details = ({ navigation, route }) => {
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
    const idTask = route.params.id;
    const idUser = route.params && route.params.userId;

    async function editTask(description, id) {
        try {
            const response = await fetch(`https://backendapptask.onrender.com/api/task/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "task_id": id,
                    "task_desc": description,
                    "user":"1"
                })
            });
    
            if (!response.ok) {
                throw new Error('Erro ao editar tarefa');
            }
    
            navigation.navigate("Task", {idUser});
        } catch (error) {
            console.error("Error editing task: ", error);
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.titulo}>{route.params.name}</Text>
            <Text style={style.label}>Descrição</Text>
            <TextInput 
                style={style.input} 
                placeholder={`${route.params.description}`} // Usando a descrição atual como placeholder
                onChangeText={text => setDescriptionEdit(text)} 
                value={descriptionEdit} 
            />
            <TouchableOpacity style={style.buttonNewTask} onPress={() => { editTask(descriptionEdit, idTask) }}>
                <Text style={style.iconButton}>
                    Salvar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Details;
