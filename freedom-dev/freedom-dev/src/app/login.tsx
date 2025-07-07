import {
  StyleSheet,
  Image,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import { globalStyle } from "@/ui/styles/global-style";
import { formStyle } from "@/ui/styles/form-style";
import { Colors } from "@/ui/constants/Colors";
import images from "../ui/constants/Images";
import { LoginForm } from "../components/LoginForm";

const Login = () => {
  const { width, height } = useWindowDimensions();
  const isSmallScreen = width < 360;
  const imageHeight = height * 0.25;

  return (
    <SafeAreaView style={globalStyle.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={[styles.container, isSmallScreen && styles.containerSmall]}>
            <Image
              source={images["asset-one"]}
              style={[styles.imageMain, { height: imageHeight }]}
              resizeMode="contain"
            />

            <View style={formStyle.form}>
              <Text style={[styles.h1, isSmallScreen && styles.h1Small]}>
                Login
              </Text>
              <LoginForm />
            </View>

            <View style={styles.containerLine}>
              <View style={styles.line} />
              <Text style={styles.orText}>OU</Text>
              <View style={styles.line} />
            </View>

            <Text style={styles.googlePlaceholder}>auth com google</Text>

            {/* Rodapé fixo e visível sempre */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Não tem conta?
                <Text style={styles.linkCreateAccount}> Criar conta</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
        <Toast />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  container: {
    flexGrow: 1,
  },
  containerSmall: {
    paddingHorizontal: 12,
  },
  imageMain: {
    width: "100%",
    alignSelf: "center",
    marginBottom: 12,
  },
  h1: {
    fontSize: 40,
    fontWeight: "500",
    marginBottom: 16,
  },
  h1Small: {
    fontSize: 32,
    marginBottom: 12,
  },
  containerLine: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: Colors.primaryGray,
    flex: 1,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: Colors.primaryGray,
  },
  googlePlaceholder: {
    textAlign: "center",
    color: Colors.primaryGray,
    fontSize: 13,
    marginBottom: 8,
  },
  footer: {
    alignItems: "center",
    marginTop: 12,
    marginBottom: 12,
  },
  footerText: {
    fontSize: 13,
    color: Colors.primaryGray,
  },
  linkCreateAccount: {
    fontSize: 13,
    paddingLeft: 4,
    color: Colors.secondaryBlue,
    fontWeight: "600",
  },
});

export default Login;
