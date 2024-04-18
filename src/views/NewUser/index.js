import React, { useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform } from 'react-native';
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FIREBASE_AUTH } from "../../config/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const NewUser = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    const auth = FIREBASE_AUTH

    const register = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            navigation.navigate("Task", { idUser: user.uid });
            console.log(user); 
            alert("Olhe seu e-mail!");
        } catch (error) {
            setErrorRegister(true)
            
            alert('Sign in faled: ' + error.message);
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.container}>
            <Text style={styles.title}>Crie uma conta</Text>
            <TextInput style={styles.input} placeholder="Entre com um endereço E-mail" keyboardType="email-address" onChangeText={(text) => setEmail(text)} value={email}></TextInput>
            <TextInput style={styles.input} placeholder="Entre com sua Senha" secureTextEntry={true} onChangeText={(text) => setSenha(text)} value={senha}></TextInput>
            {errorRegister === true ?
                <View style={styles.contextAlert}>
                    <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
                    <Text style={styles.warningAlert}>
                        E-mail ou Senha INVÁLIDO
                    </Text>
                </View> :
                <View>

                </View>
            }{email === "" || senha === ""
                ? <TouchableOpacity disabled={true} style={styles.buttonRegister}>
                    <Text style={styles.textButtonRegister}>
                        Registre-se
                    </Text>
                </TouchableOpacity>

                : <TouchableOpacity style={styles.buttonRegister} onPress={register}>
                    <Text style={styles.textButtonRegister}>
                        Registre-se
                    </Text>
                </TouchableOpacity>
            }
            <Text style={styles.login}>Já é Registrado?<Text style={styles.linkSubscribe} onPress={() => navigation.navigate("Login")}> Entre!</Text></Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
        
    );
};

export default NewUser;
