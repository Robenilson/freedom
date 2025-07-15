import { SafeAreaView } from "react-native-safe-area-context";
import {
  ImageBackground,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button, IconElement } from "@ui-kitten/components";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import images from "@/ui/constants/Images";
import { LevelComplaint } from "@/ui/components/levelComplaint";
import { modalComplaintStyle as styles } from "@/ui/styles/modalComplaint-style";
import { TypeComplaintButtons } from "../components/modalComplaint/TypeComplaintButtons";
import { useComplaintForm } from "../components/modalComplaint/useComplaintForm";
const gobackIcon = (): IconElement => (
  <FontAwesome6 name="arrow-left" size={24} color="black" />
);
export default function ModalComplaint() {
  const {
    message,
    setMessage,
    address,
    setAddress,
    selectedType,
    setSelectedType,
    handleSend,
  } = useComplaintForm();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageBackground
          source={images["image-bg-complaint"]}
          style={styles.imageBackground}
        >
          <View style={styles.contentInitial}>
            <View style={styles.header}>
              <Button
                accessoryLeft={gobackIcon}
                appearance="ghost"
                status="basic"
                style={styles.backButton}
              >
                Voltar
              </Button>

              <View style={styles.headerTitle}>
                <View style={styles.contentTitle}>
                  <Text style={styles.h1}>Precisa de ajuda?</Text>
                  <Text style={[styles.bold, styles.h1]}>#DENUNCIE 190</Text>
                </View>
                <Text style={styles.contentSubTitle}>
                  Escolha as opções que mais se assemelham ao ocorrido
                </Text>
              </View>
            </View>
            <TypeComplaintButtons
              selectedId={selectedType?.id || null}
              onSelect={setSelectedType}
            />
            <LevelComplaint />
            <Text>Caso queira, nos conte como você se sente!</Text>
            <View style={styles.texteareaContainer}>
              <TextInput
                multiline
                value={message}
                placeholder="Digite aqui"
                numberOfLines={4}
                onChangeText={setMessage}
              />
            </View>
            <View>
              <TextInput
                placeholder="Digite o endereço"
                value={address}
                onChangeText={setAddress}
              />
            </View>
            <Button onPress={handleSend}>Enviar</Button>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
