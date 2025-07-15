// screens/components/login/login.styles.ts
import { StyleSheet } from "react-native";
import { Colors } from "@/ui/constants/Colors";
export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center", // ou "flex-start" se quiser colar no topo
    paddingHorizontal: 20,
  },
  container: {
    width: "100%",
  },
  imageMain: {
    alignSelf: "center",
    marginBottom: 20,
  },
  containerLine: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: Colors.primaryGray,
    flex: 1,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: Colors.primaryGray,
  },
  containerCreateAccount: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  linkCreateAccount: {
    fontSize: 16,
    paddingLeft: 2,
    color: Colors.secondaryBlue,
    fontWeight: "500",
  },
});
