import CustomButton from "@/ui/components/CustomButton";
import { Colors } from "@/ui/constants/Colors";
import images from "@/ui/constants/Images";
import { inputStyle } from "@/ui/styles/input-style";
import { useRouter } from "expo-router";
import {
  Image,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ResetPassword = () => {
  const router = useRouter();

  return (
    <View>
      <Image source={images["reset-password"]} />
      <Text>Resetar Senha</Text>
      <View>
        <View>
          <TextInput
            style={inputStyle.input}
            placeholder="Crie uma senha forte"
          />
          <TextInput
            style={inputStyle.input}
            placeholder="Digite a senha novamente"
          />
        </View>
        <CustomButton
          title="Enviar"
          color={Colors.secondaryGray}
          fontColor="#ffffff"
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => router.push("/forgot-password/verify")}
        >
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  imageMain: {
    alignSelf: "center",
  },
  goButton: {
    padding: 8,
    borderRadius: 5,
    borderWidth: 2,
    width: "30%",
    borderColor: Colors.secondaryBlue,
    alignSelf: "center",
    alignItems: "center",
  },
});
