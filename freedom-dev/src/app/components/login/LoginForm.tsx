// components/auth/LoginForm.tsx
import { View, Text, TextInput, ActivityIndicator, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { useRouter } from "expo-router";
import { AuthContext } from "@/data/contexts/authContext";
import Toast from "react-native-toast-message";
import { Button } from "@ui-kitten/components";
import { inputStyle } from "@/ui/styles/input-style";
import { buttonStyle } from "@/ui/styles/button-style";
import { Colors } from "@/ui/constants/Colors";
import { formStyle } from "@/ui/styles/form-style";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("O Email é obrigatório").email().label("Email"),
  password: Yup.string().required("A senha é obrigatória").min(4).label("Senha"),
});

const styles = StyleSheet.create({
  errorText: {
    color: Colors.errorRed || "red", // fallback para vermelho puro
    marginBottom: 4,
    fontSize: 14,
    fontWeight: "500",
  },
});

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { LoginAcess } = useContext(AuthContext);

  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      await LoginAcess(values.email, values.password);
      router.navigate("/home/(tabs)");
      Toast.show({ type: "success", text1: "Login realizado!", text2: "Seja Bem-vindo!" });
    } catch (error) {
      console.error(error);
      Toast.show({ type: "error", text1: "Credenciais inválidas", text2: "Erro no login" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={formStyle.form}>
      <Text style={{ fontSize: 40, fontWeight: "500" }}>Login</Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
          <View>
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <TextInput
              style={inputStyle.input}
              placeholder="Digite seu email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <TextInput
              style={inputStyle.input}
              placeholder="Digite sua senha"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />
            <Text
              onPress={() => router.push("/forgot-password/verify")}
              style={{
                textAlign: "right",
                color: Colors.secondaryBlue,
                fontWeight: "500",
                marginTop: 8,
              }}
            >
              Esqueceu a senha?
            </Text>
            <Button style={buttonStyle.button} onPress={() => handleSubmit()}>
              {loading ? <ActivityIndicator /> : <Text>Login</Text>}
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};
