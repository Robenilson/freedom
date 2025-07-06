import { AuthProvider } from "@/data/contexts/authContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="reset"
          options={{
            title: "Resetar Senha",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="verify"
          options={{ title: "Verificar Email", headerShown: false }}
        />
      </Stack>
    </AuthProvider>
  );
}
