import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProfileScreen() {

  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {

    try {

      const savedData = await AsyncStorage.getItem("student");

      if (savedData) {
        setStudent(JSON.parse(savedData));
      }

    } catch (error) {

      Alert.alert(
        "Error",
        "Failed to load student information."
      );

    }
  };

  const handleDelete = async () => {

    try {

      await AsyncStorage.removeItem("student");

      setStudent(null);

      Alert.alert(
        "Deleted",
        "Student information has been deleted."
      );

    } catch (error) {

      Alert.alert(
        "Error",
        "Failed to delete student information."
      );

    }
  };

  if (!student) {

    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          No Saved Information
        </Text>

        <Text style={styles.text}>
          No student information has been saved yet.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/register")}
        >
          <Text style={styles.buttonText}>
            Register Student
          </Text>
        </Pressable>

      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: student.image }}
        style={styles.profileImage}
      />

      <Text style={styles.title}>
        Saved Student Information
      </Text>

      <Text style={styles.text}>
        Name: {student.name}
      </Text>

      <Text style={styles.text}>
        Student ID: {student.studentId}
      </Text>

      <Text style={styles.text}>
        Course: {student.course}
      </Text>

      <Text style={styles.text}>
        Year Level: {student.yearLevel}
      </Text>

      <Text style={styles.text}>
        Email: {student.email}
      </Text>

      <Text style={styles.text}>
        Contact Number: {student.contact}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/register")}
      >
        <Text style={styles.buttonText}>
          Edit Information
        </Text>
      </Pressable>

      <Pressable
        style={styles.deleteButton}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>
          Delete Information
        </Text>
      </Pressable>

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

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#E6B25C",
    marginBottom: 20,
    textAlign: "center",
  },

  text: {
    fontSize: 17,
    color: "#ae1226",
    marginBottom: 10,
    textAlign: "center",
  },

  button: {
    width: 280,
    backgroundColor: "#E6B25C",
    paddingVertical: 13,
    borderRadius: 8,
    marginTop: 10,
  },

  deleteButton: {
    width: 280,
    backgroundColor: "#ae1226",
    paddingVertical: 13,
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
});
