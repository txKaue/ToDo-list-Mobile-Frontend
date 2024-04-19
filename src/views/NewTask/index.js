import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import style from "./style";

const NewTask = ({ navigation, route }) => {
    const [taskId, setTaskId] = useState("");
    const [taskName, setTaskName] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [taskUser, setTaskUser] = useState("");
    const [taskState, setTaskState] = useState("");
    const idUser = route.params && route.params.userId;

    async function addTask() {
        try {
            const response = await fetch('https://backendapptask.onrender.com/api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task_id: taskId,
                    user: taskUser,
                    task_name: taskName,
                    task_desc: taskDesc,
                    task_state: taskState
                })
            });

            if (!response.ok) {
                throw new Error('Erro ao adicionar tarefa');
            }

            navigation.navigate("Task", { idUser });
        } catch (error) {
            console.error("Error adding task: ", error);
        }
    }

    return (
        <KeyboardAvoidingView
            style={style.container}
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
            enabled
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <View style={style.innerContainer}>
                    <Text style={style.label}>ID da Tarefa</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Ex: 1"
                        onChangeText={text => setTaskId(text)}
                        value={taskId}
                    />

                    <Text style={style.label}>Nome da Tarefa</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Ex: Estudar Python"
                        onChangeText={text => setTaskName(text)}
                        value={taskName}
                    />

                    <Text style={style.label}>Descrição da Tarefa</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Ex: Revisar capítulo 1"
                        onChangeText={text => setTaskDesc(text)}
                        value={taskDesc}
                    />

                    <Text style={style.label}>ID do Usuário</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Ex: 1"
                        onChangeText={text => setTaskUser(text)}
                        value={taskUser}
                    />

                    <Text style={style.label}>Estado da Tarefa</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Ex: A"
                        onChangeText={text => setTaskState(text)}
                        value={taskState}
                    />

                    
                </View>
            </ScrollView>
            <TouchableOpacity style={style.buttonNewTask} onPress={addTask}>
                    <Text style={style.iconButton}>
                            Salvar
                    </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        
    );
}

export default NewTask;
