import React, { useState, useEffect } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import styles from "./style";
import { FIREBASE_AUTH, signInWithEmailAndPassword, onAuthStateChanged } from "../../config/FirebaseConfig";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Login = ({ navigation, }) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const auth = FIREBASE_AUTH;


    const loginFirebase = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            navigation.navigate("Task", { idUser: user.uid });
            console.log(user); 
        } catch (error) {
            setErrorLogin(true);
            alert('Sign in failed: ' + error.message);
        }
    }
    

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
              navigation.navigate("Task", {idUser: user.uid})
            } 
          });
    }, [])


    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.container}>
            <Text style={styles.title}>Task</Text>
            <TextInput style={styles.input} placeholder="Enter com seu E-mail" keyboardType="email-address" onChangeText={(text) => setEmail(text)} value={email}></TextInput>
            <TextInput style={styles.input} placeholder="Enter com sua Senha" secureTextEntry={true} onChangeText={(text) => setSenha(text)} value={senha}></TextInput>
            {errorLogin === true ?
                <View style={styles.contextAlert}>
                    <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
                    <Text style={styles.warningAlert}>
                        E-mail ou Senha INVÁLIDO
                    </Text>
                </View> :
                <View>

                </View>
            }{email === "" || senha === ""
                ? <TouchableOpacity disabled={true} style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>
                        Login
                    </Text>
                </TouchableOpacity>

                : <TouchableOpacity style={styles.buttonLogin} onPress={loginFirebase}>
                    <Text style={styles.textButtonLogin}>
                        Login
                    </Text>
                </TouchableOpacity>
            }
            <Text style={styles.registration}>Não Tem Registro?<Text style={styles.linkSubscribe} onPress={() => navigation.navigate("NewUser")}> Cria sua Conta!</Text></Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
};

export default Login;
