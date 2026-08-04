import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#E6B25C",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Student Portal",
        }}
      />

      <Stack.Screen
        name="about"
        options={{
          title: "About",
        }}
      />

      <Stack.Screen
        name="contact"
        options={{
          title: "Contact",
        }}
      />

      <Stack.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Stack>
  );
}