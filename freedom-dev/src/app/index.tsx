import React, { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../ui/constants/Colors";
import images from "../ui/constants/Images";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const router = useRouter();

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token-key");
      if (value !== null) {
        router.navigate("/home/(tabs)");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageBackground
          source={images["image-welcome"]}
          style={styles.imageBackground}
        >
          <View style={styles.overlay}>
            <View style={styles.contentInitial}>
              <Text style={styles.titleInitial}>Seja livre, seja Freedom!</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/login")}
              >
                <Text style={styles.textButton}>Continuar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  imageBackground: {
    backgroundColor: Colors.secondaryPink,
    flex: 1,
    resizeMode: "contain",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Alterar a cor e opacidade conforme necessário
  },
  contentInitial: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 50,
  },
  titleInitial: {
    width: "auto",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
    color: Colors.Dark,
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: Colors.secondaryPink,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 100,
    paddingVertical: 15,
    marginTop: 10,
  },
  textButton: {
    fontSize: 17,
    fontWeight: "500",
  },
});

export default App;
