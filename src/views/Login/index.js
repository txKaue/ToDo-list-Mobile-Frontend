import React, { useState, useEffect } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import styles from "./style";
import { FIREBASE_AUTH, FIREBASE_APP, FIREBASE_DB } from "../../config/FirebaseConfig";
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Login = ({ navigation, }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const auth = FIREBASE_AUTH;


    const signIn  = async () => {
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            navigation.navigation("Task", {idUser: user.uid})
            console.log(response)
        } catch (error){
            console.log(error);
            alert('Sign in faled: ' + error.message);
        }finally{

        }
    }
    

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
            {errorLogin === true ?
                <View style={styles.contextAlert}>
                    <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
                    <Text style={styles.warningAlert}>
                        E-mail ou Senha INVÁLIDO
                    </Text>
                </View> :
                <View>

                </View>
            }{email === "" || password === ""
                ? <TouchableOpacity disabled={true} style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>
                        Login
                    </Text>
                </TouchableOpacity>

                : <TouchableOpacity style={styles.buttonLogin} onPress={signIn}>
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
