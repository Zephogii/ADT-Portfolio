import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
    Alert,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function StudentInfoScreen() {
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
      <View style={styles.emptyContainer}>
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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Saved Student Information
      </Text>

      {student.profileImage && (
        <Image
          source={{ uri: student.profileImage }}
          style={styles.profileImage}
        />
      )}

      <View style={styles.infoBox}>
        <Text style={styles.label}>Full Name</Text>
        <Text style={styles.text}>{student.name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Student ID</Text>
        <Text style={styles.text}>{student.studentId}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Course</Text>
        <Text style={styles.text}>{student.course}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Year Level</Text>
        <Text style={styles.text}>{student.yearLevel}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Email Address</Text>
        <Text style={styles.text}>{student.email}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Contact Number</Text>
        <Text style={styles.text}>{student.contact}</Text>
      </View>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F7FA",
    alignItems: "center",
    padding: 20,
  },

  emptyContainer: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#E6B25C",
    marginBottom: 20,
    textAlign: "center",
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 25,
  },

  infoBox: {
    width: 300,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E6B25C",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#E6B25C",
    marginBottom: 4,
  },

  text: {
    fontSize: 17,
    color: "#ae1226",
  },

  button: {
    width: 300,
    backgroundColor: "#E6B25C",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 15,
  },

  deleteButton: {
    width: 300,
    backgroundColor: "#ae1226",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 30,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
