import React from "react";
import { ActivityIndicator, Text, StyleSheet, ViewStyle } from "react-native";
import { Button } from "@ui-kitten/components";

// Props do componente
interface ButtonWithLoadingProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
}

// Componente ButtonWithLoading com cor customizada
export const ButtonWithLoading: React.FC<ButtonWithLoadingProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
}) => {
  const isDisabled = disabled || loading;

  return (
    <Button
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.button,
        {
          backgroundColor: isDisabled ? "#999999" : "#333333", // Cor customizada de acordo com o estado
        opacity: isDisabled ? 0.4 : 0.6
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Button>
  );
};

// Estilos
const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 0,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});
