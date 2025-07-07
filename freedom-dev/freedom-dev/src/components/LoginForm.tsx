import {
  ActivityIndicator,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { useRouter } from "expo-router";
import { AuthContext } from "@/data/contexts/authContext";
import { inputStyle } from "@/ui/styles/input-style";
import { Colors } from "@/ui/constants/Colors";
import Toast from "react-native-toast-message";

import { ButtonWithLoading } from "@/components/ButtonWithLoading";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("O Email é obrigatório")
    .email("Insira um email válido"),
  password: Yup.string()
    .required("A senha é obrigatória")
    .min(4, "A senha deve ter no mínimo 4 caracteres"),
});

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { LoginAcess } = useContext(AuthContext);

  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      await LoginAcess(values.email, values.password);
      await router.push("/home/(tabs)"); // método correto é push

      Toast.show({
        type: "success",
        text1: "Login realizado!",
        text2: "Seja Bem-vindo!",
      });
    } catch (error) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: "Credenciais inválidas",
        text2: "Erro no login",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
          isValid,
          dirty,
        }) => (
          <View style={styles.formContainer}>
            <TextInput
              style={inputStyle.input}
              placeholder="Digite seu email"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <TextInput
              style={inputStyle.input}
              placeholder="Digite sua senha"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <Text
              style={styles.forgetPassword}
              onPress={() => router.push("/forgot-password/verify")}
            >
              Esqueceu a senha?
            </Text>

            <ButtonWithLoading
              title="Login"
              onPress={() => handleSubmit()}
              loading={loading}
              disabled={!isValid || !dirty || loading}
              style={styles.button}
            />


            <View >
              <Text style={{ color: "#fff" }}>
                Aviso: O campo senha é sensível
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
  },
  formContainer: {
    flex: 1,
    position: "relative",
  },
  button: {
    marginTop: 20,
  },
  error: {
    color: "red",
    marginBottom: 8,
    marginTop: 4,
  },
  forgetPassword: {
    textAlign: "right",
    color: Colors.secondaryBlue,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 20,
  },
  overlappingElement: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});
