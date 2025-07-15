import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

export const textStyle = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: "500",
    color: "#13445A",
    marginBottom: 15,
  },
  p: {
    color: Colors.secondaryGray,
    fontSize: 14,
  },
  h1Home: {
    fontSize: 40,
    fontWeight: "500",
    color: "#703540",
    marginBottom: 15,
    textAlign: "center",
  },

  error: {
    color: "#FF3B30", 
    fontSize: 13,
    marginTop: -5,
    marginBottom: 5,
  },
});
