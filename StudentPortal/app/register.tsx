import {router} from "expo-router";
import { useState } from "react";
import {StyleSheet, View, Text, Form, TextInput, Alert} from "react-native";

export default function Registration(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    
    // Process registration payload
    Alert.alert('Success', `Account created for ${name}!`);
    }
return (
    
  <View style={styles.container}>
    <TextInput
      style={styles.TextInput}
      placeholder="Student Name"
      value={name}
      onChangeText={(text) => setName(text)}
    />
    <TextInput
      style={styles.TextInput}
      placeholder="Email"
      value={email}
      onChangeText={(text) => setEmail(text)}
      keyboardType="email-address"
    />
    <TextInput
      style={styles.TextInput}
      placeholder="Password"
      value={password}
      onChangeText={(text) => setPassword(text)}
      secureTextEntry={true}
    />
    
  </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    TextInput: {
        height: 40,
        borderColor: "#E6B25C",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    }

})

