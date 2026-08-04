import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Student Portal</Text>

      <Text style={styles.subtitle}>
        Welcome to the Student Portal Application
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/about")}
      >
        <Text style={styles.buttonText}>About</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/contact")}
      >
        <Text style={styles.buttonText}>Contact</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/profile")}
      >
        <Text style={styles.buttonText}>Profile</Text>
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

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#E6B25C",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#040303",
    marginBottom: 40,
    textAlign: "center",
  },

  button: {
    width: 220,
    backgroundColor: "#E6B25C",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});