import CustomButton from "@/ui/components/CustomButton";
import { Colors } from "@/ui/constants/Colors";
import images from "@/ui/constants/Images";
import { globalStyle } from "@/ui/styles/global-style";
import { inputStyle } from "@/ui/styles/input-style";
import { textStyle } from "@/ui/styles/text-style";
import { useRouter } from "expo-router";
import {
  Image,
  TextInput,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const VerifyEmail = () => {
  const router = useRouter();

  const handleResetScreen = () => {
    router.push("/forgot-password/reset");
  };
  return (
    <SafeAreaView style={globalStyle.safeArea}>
      <View style={styles.container}>
        <Image source={images["reset-password"]} />
        <Text style={textStyle.h1}>Esqueceu a senha?</Text>
        <Text style={textStyle.p}>Não se preocupe, você pode recuperá-la!</Text>
        <View>
          <View>
            <TextInput
              style={inputStyle.input}
              placeholder="Digite seu email ou numero de celular"
            />
          </View>

          <CustomButton
            title={"Enviar"}
            color={Colors.secondaryGray}
            fontColor="#ffffff"
            onPress={handleResetScreen}
          />

          <TouchableOpacity
            style={styles.goButton}
            onPress={() => router.push("/login")}
          >
            <Text>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmail;

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
