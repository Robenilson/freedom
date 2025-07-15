import React from "react";
import { View, Text, TextInput, ActivityIndicator } from "react-native";
import { Formik } from "formik";
import { Button } from "@ui-kitten/components";
import { inputStyle } from "@/ui/styles/input-style";
import { textStyle } from "@/ui/styles/text-style";
import { formStyle } from "@/ui/styles/form-style";
import { buttonStyle } from "@/ui/styles/button-style";
interface RegisterFormProps {
  loading: boolean;
  validationSchema: any;
  onSubmit: (values: any) => void;
}
export const RegisterForm = ({ loading, validationSchema, onSubmit }: RegisterFormProps) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
        age: 0,
        tel: "",
        cpf: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}   >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={formStyle.form}>
          {/* Nome */}
          {touched.name && errors.name && <Text style={textStyle.error}>{errors.name}</Text>}
          <TextInput
            style={inputStyle.input}
            placeholder="Nome completo"
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
          />

          {/* Email */}
          {touched.email && errors.email && <Text style={textStyle.error}>{errors.email}</Text>}
          <TextInput
            style={inputStyle.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />

          {/* Confirmar Email */}
          {touched.confirmEmail && errors.confirmEmail && (
            <Text style={textStyle.error}>{errors.confirmEmail}</Text>
          )}
          <TextInput
            style={inputStyle.input}
            placeholder="Confirmar email"
            keyboardType="email-address"
            onChangeText={handleChange("confirmEmail")}
            onBlur={handleBlur("confirmEmail")}
            value={values.confirmEmail}
          />



          {/* Idade */}
          {touched.age && errors.age && <Text style={textStyle.error}>{errors.age}</Text>}
            <TextInput
            style={inputStyle.input}
            placeholder="Idade"
            keyboardType="numeric"
            onChangeText={handleChange("age")}
            onBlur={handleBlur("age")}
             value={values.age && values.age !== 0 ? values.age.toString() : ""}
            />

          {/* Telefone */}
          {touched.tel && errors.tel && <Text style={textStyle.error}>{errors.tel}</Text>}
          <TextInput
            style={inputStyle.input}
            placeholder="Celular"
            onChangeText={handleChange("tel")}
            onBlur={handleBlur("tel")}
            value={values.tel}
          />

          {/* CPF */}
          {touched.cpf && errors.cpf && <Text style={textStyle.error}>{errors.cpf}</Text>}
          <TextInput
            style={inputStyle.input}
            placeholder="CPF"
            onChangeText={handleChange("cpf")}
            onBlur={handleBlur("cpf")}
            value={values.cpf}
          />

          {/* Senha */}
          {touched.password && errors.password && (
            <Text style={textStyle.error}>{errors.password}</Text>
          )}
          <TextInput
            style={inputStyle.input}
            placeholder="Senha"
            secureTextEntry
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />

          {/* Confirmar Senha */}
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={textStyle.error}>{errors.confirmPassword}</Text>
          )}
          <TextInput
            style={inputStyle.input}
            placeholder="Confirmar senha"
            secureTextEntry
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
          />

          <Text style={textStyle.small}>
            Ao criar uma conta, você aceita os termos de privacidade e uso de dados.
          </Text>

          <Button
            style={[buttonStyle.button, { marginTop: 20 }]}
            onPress={handleSubmit}
            disabled={loading}
          >
            {loading ? <ActivityIndicator /> : <Text>Registrar</Text>}
          </Button>
        </View>
      )}
    </Formik>
  );
};
