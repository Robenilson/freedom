import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/data/contexts/authContext";
import { LoginForm } from "./components/login/LoginForm";
import { styles } from "@/ui/styles/login.styles";
import { globalStyle } from "@/ui/styles/global-style";
import images from "@/ui/constants/Images";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  return (
    <AuthProvider>
      <SafeAreaView style={[globalStyle.safeArea, { flex: 1 }]}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Image style={styles.imageMain} source={images["asset-one"]} />
            <LoginForm />
            <View style={styles.containerLine}>
              <View style={styles.line} />
              <Text style={styles.orText}>OU</Text>
              <View style={styles.line} />
            </View>
            <Text>auth com google</Text>
            <View style={styles.containerCreateAccount}>
              <Text>
                Não tem conta?
                <Text
                  style={styles.linkCreateAccount}
                  onPress={() => router.push("/register")}
                >
                  {" "}Criar conta
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Toast />
    </AuthProvider>
  );
};

export default Login;
