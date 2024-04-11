import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { FIREBASE_AUTH, FIREBASE_DB } from "../../config/FirebaseConfig";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import styles from "./style";


const Task = ({ navigation, route }) => {
    const [tasks, setTasks] = useState([]);

    const auth = FIREBASE_AUTH;

    function logout(){
        signOut(auth).then(() => {
            navigation.navigate('Login');
        }).catch((error) => {
            alert("Erro ao sair: ", error);
q       });
    }

    

    async function deleteTask(id) {
        try {
            await deleteDoc(doc(FIREBASE_DB, route.params.idUser, id));
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error("Error deleting task: ", error);
        }
    }

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const querySnapshot = await getDocs(collection(FIREBASE_DB, route.params.idUser));
                const list = [];
                querySnapshot.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id });
                });
                setTasks(list);
            } catch (error) {
                console.error("Error fetching tasks: ", error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={tasks}
                renderItem={({ item }) => (
                    <View style={styles.Tasks}>
                        <TouchableOpacity style={styles.deleteTask} onPress={() => deleteTask(item.id)}>
                            <FontAwesome name="check" size={23} color={"#120A8F"} />
                        </TouchableOpacity>
                        <Text style={styles.DescriptionTask} onPress={() => {
                            navigation.navigate("Details", {
                                id: item.id,
                                description: item.description,
                                idUser: route.params.idUser
                            });
                        }}>
                            {item.description}
                        </Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
            <TouchableOpacity style={styles.buttonNewTask} onPress={() => navigation.navigate("NewTask", {idUser: user.id})}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logOut} onPress={() => logout()}>
                <Text>
                    
                </Text>

            </TouchableOpacity>
        </View>
    );
};

export default Task;
