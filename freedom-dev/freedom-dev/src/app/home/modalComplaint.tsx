import images from "@/ui/constants/Images";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, IconElement } from "@ui-kitten/components";
import { LevelComplaint } from "@/ui/components/levelComplaint";

const gobackIcon = (props: any): IconElement => (
  <FontAwesome6 name="arrow-left" size={24} color="black" />
);

const writeComment = (props: any): IconElement => (
  <MaterialCommunityIcons name="comment-edit" size={24} color="black" />
);

const listTypeComplaint = [
  {
    id: 1,
    name: "Chantagem",
  },
  {
    id: 2,
    name: "Violência patrimonial ",
  },
  {
    id: 3,
    name: "Agressão",
  },
  {
    id: 4,
    name: "Perseguição",
  },
  {
    id: 5,
    name: "Humilhação",
  },
  {
    id: 6,
    name: "Assédio verbal",
  },
  {
    id: 7,
    name: "Assédio psicológico",
  },
  {
    id: 8,
    name: "Assédio físico",
  },
  {
    id: 9,
    name: "Outros",
  },
];

export default function modalComplaint() {
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

            <View style={styles.listTypeComplaint}>
              {listTypeComplaint.map((list) => (
                <View key={list.id} style={styles.listTypeButtons}>
                  <Button
                    style={styles.listButtonItem}
                    status="basic"
                    appearance="outline"
                  >
                    <Text
                      style={styles.buttonText}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {list.name}
                    </Text>
                  </Button>
                </View>
              ))}
            </View>

            <View>
              <LevelComplaint />
            </View>
            <Text>Caso queira, nos conte como você se sente!</Text>
            <View style={styles.texteareaContainer}>
              <TextInput
                multiline={true}
                value="text"
                placeholder="Digite aqui"
                numberOfLines={4}
              ></TextInput>
            </View>
            <View>
              <TextInput placeholder="Digite o endereço"></TextInput>
            </View>
            <Button>Enviar</Button>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    height: "auto",
    width: "100%",
    flex: 1,
  },
  imageBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    flex: 1,
    resizeMode: "contain",
  },

  contentInitial: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    justifyContent: "space-evenly",
  },
  header: {
    width: "auto",
  },
  headerTitle: {
    width: "auto",
    textAlign: "center",
  },
  contentTitle: {
    alignItems: "center",
  },
  h1: {
    color: "#ffffff",
    fontSize: 25,
  },
  bold: {
    fontWeight: "600",
  },
  contentSubTitle: {
    flexWrap: "wrap",
    marginTop: 15,
    width: "60%",
    alignSelf: "center",
    textAlign: "center",
    color: "#ffffff",
  },
  backButton: {
    width: "30%",
  },
  listTypeComplaint: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  listTypeButtons: {
    width: "32%",
    marginBottom: 10,
  },
  listButtonItem: {
    flexWrap: "wrap",
    minHeight: 65,
    alignItems: "flex-start",
  },
  buttonText: {
    flexWrap: "wrap",
    width: "100%",
    textAlign: "left",
  },

  texteareaContainer: {
    backgroundColor: "#ffffff",
  },
});
