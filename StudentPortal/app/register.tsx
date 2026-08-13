import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Registration() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [course, setCourse] = useState("");
  const [yearLevel, setYearLevel] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Load previously saved information
  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const savedData = await AsyncStorage.getItem("student");

      if (savedData) {
        const student = JSON.parse(savedData);

        setName(student.name || "");
        setStudentId(student.studentId || "");
        setCourse(student.course || "");
        setYearLevel(student.yearLevel || "");
        setEmail(student.email || "");
        setContact(student.contact || "");
        setProfileImage(student.profileImage || null);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load student information.");
    }
  };

  // Choose profile picture
  const chooseProfilePicture = async () => {
    try {
      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          "Permission Required",
          "Please allow access to your photos to choose a profile picture."
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert("Error", "Unable to choose profile picture.");
    }
  };

  const handleSave = async () => {
    // Validation
    if (
      !name ||
      !studentId ||
      !course ||
      !yearLevel ||
      !email ||
      !contact
    ) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    if (!profileImage) {
      Alert.alert("Error", "Please choose a profile picture.");
      return;
    }

    const student = {
      name,
      studentId,
      course,
      yearLevel,
      email,
      contact,
      profileImage,
    };

    try {
      await AsyncStorage.setItem("student", JSON.stringify(student));

      Alert.alert(
        "Success",
        "Student information saved!",
        [
          {
            text: "OK",
            onPress: () => router.push("/student-info"),
          },
        ]
      );
    } catch (error) {
      console.log("AsyncStorage error:", error);

      Alert.alert(
        "Error",
        "Failed to save student information."
      );
    }
  };

  const handleClear = () => {
    setName("");
    setStudentId("");
    setCourse("");
    setYearLevel("");
    setEmail("");
    setContact("");
    setProfileImage(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Registration</Text>

      <Pressable onPress={chooseProfilePicture}>
        {profileImage ? (
          <Image
            source={{ uri: profileImage }}
            style={styles.profileImage}
          />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.placeholderText}>
              Add Photo
            </Text>
          </View>
        )}
      </Pressable>

      <Text style={styles.imageInstruction}>
        Tap the picture to choose a profile photo
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={studentId}
        onChangeText={setStudentId}
      />

      <TextInput
        style={styles.input}
        placeholder="Course"
        value={course}
        onChangeText={setCourse}
      />

      <TextInput
        style={styles.input}
        placeholder="Year Level"
        value={yearLevel}
        onChangeText={setYearLevel}
      />

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
      />

      <Pressable
        style={styles.saveButton}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>

      <Pressable
        style={styles.clearButton}
        onPress={handleClear}
      >
        <Text style={styles.buttonText}>Clear</Text>
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

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#E6B25C",
    marginBottom: 20,
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },

  imagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  placeholderText: {
    fontSize: 18,
    color: "#555",
  },

  imageInstruction: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },

  input: {
    width: 300,
    height: 50,
    borderColor: "#E6B25C",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    fontSize: 16,
  },

  saveButton: {
    width: 300,
    backgroundColor: "#E6B25C",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },

  clearButton: {
    width: 300,
    backgroundColor: "#ae1226",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 30,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
