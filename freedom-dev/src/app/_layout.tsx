import { Stack } from "expo-router";
import { AuthContext, AuthProvider } from "../data/contexts/authContext";
import { useContext } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

export default function RootLayout() {
  const { user } = useContext(AuthContext);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthProvider>
        {!user ? (
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="index"
              options={{ title: "index", headerShown: false }}
            />
            <Stack.Screen
              name="login"
              options={{ title: "Login", headerShown: false }}
            />
            <Stack.Screen
              name="register"
              options={{ title: "Register", headerShown: false }}
            />
          </Stack>
        ) : (
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        )}
      </AuthProvider>
    </ApplicationProvider>
  );
}
