import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Student Profile</Text>

      <Text style={styles.text}>Name: Joseph Dupla Jr.</Text>

      <Text style={styles.text}>
        Course: Bachelor of Science in Information Technology
      </Text>

      <Text style={styles.text}>
        Year Level: 4th Year
      </Text>

      <Text style={styles.text}>
        Address: Iligan City
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
    marginBottom: 12,
    textAlign: "center",
  },
});