import React from 'react';
import { TextInput, Text, View, StyleSheet, TextInputProps } from 'react-native';

interface FormikInputProps extends TextInputProps {
  placeholder: string;
  field: string;
  formik: {
    values: Record<string, any>;
    errors: Record<string, string>;
    touched: Record<string, boolean>;
    handleChange: (field: string) => (value: string) => void;
    handleBlur: (field: string) => () => void;
  };
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
}

export const FormikInput: React.FC<FormikInputProps> = ({
  placeholder,
  field,
  formik,
  secureTextEntry = false,
  keyboardType = 'default',
  ...rest
}) => {
  const hasError = formik.touched[field] && formik.errors[field];

  const getValue = () => {
    const value = formik.values[field];

    // Se for número 0 ou string '0', retorna string vazia
    if (value === 0 || value === '0') return '';
    return value?.toString() || '';
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, hasError && styles.inputError]}
        placeholder={placeholder}
        onChangeText={formik.handleChange(field)}
        onBlur={formik.handleBlur(field)}
        value={getValue()}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        {...rest}
      />
      {hasError && <Text style={styles.errorText}>{formik.errors[field]}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#f00',
  },
  errorText: {
    color: '#f00',
    fontSize: 12,
    marginTop: 4,
  },
});
