import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Formik } from "formik"
import { useRouter } from "expo-router"
import { FormikInput } from "../components/FormikInput"
import { validationSchema } from "../components/validationSchema"
import { useRegister } from "../data/hooks/useRegister"
import { textStyle } from "@/ui/styles/text-style"
import { globalStyle } from "@/ui/styles/global-style"
import { formStyle } from "@/ui/styles/form-style"
import { buttonStyle } from "@/ui/styles/button-style"
import { registerStyle } from "../components/register-style"
import { Button } from "@ui-kitten/components"
const Register = () => {
  const router = useRouter()
  const { handleCreateUser, loading } = useRegister()
  return (
    <SafeAreaView style={globalStyle.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <ScrollView
          contentContainerStyle={registerStyle.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={formStyle.form}>
            <Text style={textStyle.h1}>Criar Conta</Text>

            <Formik
              initialValues={{
                email: "",
                confirmEmail: "",
                password: "",
                confirmPassword: "",
                name: "",
                tel: "",
                cpf: "",
                age: 0,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) =>
                handleCreateUser(
                  values.email,
                  values.password,
                  values.name,
                  values.tel,
                  values.cpf,
                  values.age || 0
                )
              }
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => {
                const formik = {
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                }

                return (
                  <View style={registerStyle.contentForm}>
                    <FormikInput
                      placeholder="Nome completo"
                      field="name"
                      formik={formik}
                      keyboardType="default"
                    />
                    <FormikInput
                      placeholder="Email"
                      field="email"
                      formik={formik}
                      keyboardType="email-address"
                    />
                    <FormikInput
                      placeholder="Confirmar email"
                      field="confirmEmail"
                      formik={formik}
                      keyboardType="email-address"
                    />
                    <FormikInput
                      placeholder="Digite sua idade"
                      field="age"
                      formik={formik}
                      keyboardType="number-pad"
                    />
                    <FormikInput
                      placeholder="Número de celular"
                      field="tel"
                      formik={formik}
                      keyboardType="phone-pad"
                    />
                    <FormikInput
                      placeholder="Digite seu CPF"
                      field="cpf"
                      formik={formik}
                      keyboardType="number-pad"
                    />
                    <FormikInput
                      placeholder="Criar senha"
                      field="password"
                      formik={formik}
                      secureTextEntry
                    />
                    <FormikInput
                      placeholder="Confirmar senha"
                      field="confirmPassword"
                      formik={formik}
                      secureTextEntry
                    />

                    <Text style={registerStyle.termsText}>
                      Ao criar uma conta, você aceita os termos de privacidade e uso de dados.
                    </Text>

                    <Button
                      style={[buttonStyle.button, registerStyle.button]}
                      onPress={handleSubmit}
                      disabled={loading}
                    >
                      {loading ? (
                        <ActivityIndicator color="#fff" />
                      ) : (
                        <Text style={{ color: "#fff" }}>Registrar</Text>
                      )}
                    </Button>
                  </View>
                )
              }}
            </Formik>
          </View>
          <View style={registerStyle.goToLogin}>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text>Já tem conta? Faça o Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
export default Register

