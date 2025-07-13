import { Stack } from "expo-router";

export default function LayoutHome() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="modalProfile" options={{ title: "Perfil" }} />
      <Stack.Screen name="modalComplaint" options={{ title: "Denuncias" }} />
    </Stack>
  );
}
