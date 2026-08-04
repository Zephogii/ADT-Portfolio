import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>About</Text>

      <Text style={styles.text}>
        Student Portal Application
      </Text>

      <Text style={styles.text}>
        Simple Student Portal Application
      </Text>

      <Text style={styles.text}>
        Course: Bachelor of Science in Information Technology
      </Text>

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
    fontSize: 28,
    fontWeight: "bold",
    color: "#E6B25C",
    marginBottom: 25,
  },

  text: {
    fontSize: 18,
    color: "#ae1226",
    textAlign: "center",
    marginBottom: 12,
  },
});