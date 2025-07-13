import {
  ActivityIndicator,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../ui/constants/Images";

import { Formik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { AuthContext, AuthProvider } from "@/data/contexts/authContext";
import { inputStyle } from "@/ui/styles/input-style";
import { Colors } from "@/ui/constants/Colors";
import { globalStyle } from "@/ui/styles/global-style";
import { buttonStyle } from "@/ui/styles/button-style";
import { formStyle } from "@/ui/styles/form-style";
import Toast from "react-native-toast-message";
import { Button } from "@ui-kitten/components";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("O Email é obrigatório").email().label("Email"),
  password: Yup.string()
    .required("A senha é obrigatória")
    .min(4)
    .label("Senha"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { LoginAcess } = useContext(AuthContext);

  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      await LoginAcess(values.email, values.password);
      router.navigate("/home/(tabs)");

      Toast.show({
        type: "success",
        text1: "Login realizado!",
        text2: "Seja Bem-vindo!",
      });

      return;
    } catch (error) {
      console.error(error);

      Toast.show({
        type: "error",
        text1: "Credenciais invalidas",
        text2: "Erro no login",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthProvider>
      <SafeAreaView style={globalStyle.safeArea}>
        <View style={styles.container}>
          <Image style={styles.imageMain} source={images["asset-one"]} />
          <View style={formStyle.form}>
            <Text style={styles.h1}>Login</Text>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={async (values) => {
                handleLogin({ email: values.email, password: values.password });
              }}
              validationSchema={validationSchema}
            >
              {({
                handleChange,
                handleSubmit,
                handleBlur,
                values,
                errors,
                touched,
              }) => (
                <View>
                  <TextInput
                    style={inputStyle.input}
                    placeholder="Digite seu email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {errors.email && touched.email && <Text>{errors.email}</Text>}

                  <TextInput
                    style={inputStyle.input}
                    placeholder="Digite sua senha"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                  />
                  {errors.password && touched.password && (
                    <Text>{errors.password}</Text>
                  )}

                  <Text
                    onPress={() => router.push("/forgot-password/verify")}
                    style={styles.forgetPassword}
                  >
                    Esqueceu a senha?
                  </Text>

                  <Button
                    style={buttonStyle.button}
                    onPress={() => handleSubmit()}
                  >
                    {loading ? <ActivityIndicator /> : <Text>Login</Text>}
                  </Button>
                </View>
              )}
            </Formik>
          </View>
          <View style={styles.containerLine}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>OU</Text>
            <View style={styles.line}></View>
          </View>
          <Text>auth com google</Text>

          <View style={styles.containerCreateAccount}>
            <Text>
              Não tem conta?
              <Text
                style={styles.linkCreateAccount}
                onPress={() => router.push("/register")}
              >
                <Text> Criar conta</Text>
              </Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <Toast />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    width: "100%",
    height: "80%",
  },
  imageMain: {
    alignSelf: "center",
  },
  h1: {
    fontSize: 40,
    fontWeight: "500",
  },

  containerLine: {
    flexDirection: "row",
    alignItems: "center",
    height: "5%",
    padding: 5,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: Colors.primaryGray,
    flex: 1,
    padding: 2,
  },
  containerCreateAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  linkCreateAccount: {
    fontSize: 16,
    paddingLeft: 2,
    color: Colors.secondaryBlue,
    fontWeight: "500",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: Colors.primaryGray,
  },
  forgetPassword: {
    textAlign: "right",
    color: Colors.secondaryBlue,
    fontWeight: "500",
  },
});

export default Login;
