import React, { useState, useEffect } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import styles from "./style";
import { FIREBASE_AUTH } from "../../config/FirebaseConfig";
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate("Task", { idUser: user.uid });
            }
        });
        return () => unsubscribe();
    }, [navigation]);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.container}>
            <Text style={styles.title}>LOGIN</Text>
            <TextInput style={styles.input} placeholder="Entre com um endereço E-mail" keyboardType="email-address" onChangeText={(text) => setEmail(text)} value={email}></TextInput>
            <TextInput style={styles.input} placeholder="Entre com sua Senha" secureTextEntry={true} onChangeText={(text) => setPassword(text)} value={password}></TextInput>

            <TouchableOpacity style={styles.buttonLogin} onPress={signIn} disabled={!email || !password}>
                <Text style={styles.textButtonLogin}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.registration}>Não Tem Registro?<Text style={styles.linkSubscribe} onPress={() => navigation.navigate("NewUser")}> Cria sua Conta!</Text></Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
};

export default Login;
