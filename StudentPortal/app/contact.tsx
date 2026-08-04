import { StyleSheet, Text, View } from "react-native";

export default function ContactScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Contact</Text>

      <Text style={styles.label}>Email</Text>
      <Text style={styles.text}>josephduetes.duplajr@mysmciligan.edu.ph</Text>

      <Text style={styles.label}>Phone</Text>
      <Text style={styles.text}>09469007637</Text>

      <Text style={styles.label}>Address</Text>
      <Text style={styles.text}>Iligan City</Text>

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

  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },

  text: {
    fontSize: 18,
    color: "#ae1226",
    marginBottom: 10,
  },
});