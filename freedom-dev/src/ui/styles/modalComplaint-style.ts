// ui/styles/modalComplaint-style.ts
import { StyleSheet } from "react-native";

export const modalComplaintStyle = StyleSheet.create({
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
