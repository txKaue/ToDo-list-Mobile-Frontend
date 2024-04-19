import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { signOut } from 'firebase/auth'; // Corrigindo o import do signOut
import { initializeApp } from 'firebase/app'; // Corrigindo o import do initializeApp
import { getAuth } from 'firebase/auth'; // Corrigindo o import do getAuth
import { FIREBASE_AUTH } from "../../config/FirebaseConfig";

const Task = ({ navigation, route }) => {
    const [tasks, setTasks] = useState([]);

    // Função para deletar uma tarefa
    const deleteTask = async (id) => {
        try {
            const response = await fetch(`https://backendapptask.onrender.com/api/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task_id: id
                })
            });

            if (!response.ok) {
                throw new Error('Erro ao deletar tarefa');
            }

            // Atualiza a lista de tarefas localmente após a exclusão bem-sucedida
            setTasks(tasks.filter(task => task.task_id !== id));
        } catch (error) {
            console.error("Error deleting task: ", error);
        }
    };

    const fetchTasks = async () => {
        try {
            const response = await fetch(`https://backendapptask.onrender.com`);

            if (!response.ok) {
                throw new Error('Erro ao buscar tarefas');
            }

            const data = await response.json();

            setTasks(data);
        } catch (error) {
            console.error("Error fetching tasks: ", error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [route.params.idUser]); // Adiciona route.params.idUser como dependência do useEffect para que a chamada à API seja feita sempre que esse valor mudar

    return (
        <View style={styles.container}>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={tasks}
                renderItem={({ item }) => (
                    <View style={styles.Tasks}>
                        {/* Renderiza os dados da tarefa */}
                        <TouchableOpacity style={styles.deleteTask} onPress={() => deleteTask(item.task_id)}>
                            <FontAwesome name="check" size={23} color={"#120A8F"} />
                        </TouchableOpacity>

                        <Text style={styles.DescriptionTask} onPress={() => {
                            navigation.navigate("Details", {
                                id: item.task_id,
                                name: item.task_name,
                                description: item.task_desc,
                                userId: route.params.idUser, // Certifique-se de incluir a propriedade userId aqui
                            });
                        }}>
                            ID: {item.task_id}, Nome: {item.task_name}, UserID: {item.user}
                        </Text>
                    </View>
                )}
                keyExtractor={(item) => item.task_id.toString()}
            />

            <TouchableOpacity style={styles.buttonNewTask} onPress={() => navigation.navigate("NewTask", { idUser: route.params.idUser })}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonLogOut}
                onPress={async () => {
                    await signOut(FIREBASE_AUTH);
                    navigation.navigate('Login');
                }}
            >
                <Text style={styles.iconButtonLogOut}>
                    <MaterialCommunityIcons name="location-exit" size={23} color="#f92e6a" />
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.reloadButton} onPress={fetchTasks}>
                <MaterialCommunityIcons name="reload" size={46} color="#FFFFFF" />
            </TouchableOpacity>

        </View>
    );
};

export default Task;
