import Slider from "@react-native-community/slider";
import { StyleSheet, View } from "react-native";
import { Colors } from "../constants/Colors";

export function LevelComplaint() {
  return (
    <View style={styles.container}>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={3}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryBlue,
    borderRadius: 5,
    alignItems: "center",
  },
});
