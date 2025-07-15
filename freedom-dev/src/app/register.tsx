import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Platform, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyle } from "@/ui/styles/global-style";
import { textStyle } from "@/ui/styles/text-style";
import { useRegisterLogic } from "./components/RegisterLogic";
import { RegisterForm } from "./components/RegisterForm";
const Register = () => {
  const { loading, validationSchema, handleCreateUser } = useRegisterLogic();
  const handleSubmit = (values: any) => {
    handleCreateUser(
      values.email,
      values.password,
      values.name,
      values.tel,
      values.cpf,
      values.age
    );
  };
  return (
    <SafeAreaView style={globalStyle.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={textStyle.h1}>Criar Conta</Text>
          <RegisterForm
            loading={loading}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          />
          <View style={styles.goToLogin}>
            <TouchableOpacity>
              <Text>Já tem conta? Faça o Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  goToLogin: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Register;
