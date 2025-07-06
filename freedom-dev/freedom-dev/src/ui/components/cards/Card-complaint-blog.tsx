import { Avatar, Button, IconElement } from "@ui-kitten/components";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/ui/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const buttonLike = (props: any): IconElement => (
  <AntDesign name="hearto" size={24} color="black" />
);

const comment = (props: any): IconElement => (
  <MaterialIcons name="add-comment" size={24} color={Colors.primaryPink} />
);

export default function CardComplaintBlog() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Avatar
            size="large"
            source={require("../../../ui/assets/example-profile.png")}
          />
          <View style={styles.name}>
            <Text style={styles.h3}>Maria Clara Santos</Text>
            <Text>23/04/2025 - Itapuã</Text>
          </View>
        </View>
        <Button accessoryLeft={buttonLike} appearance="ghost"></Button>
      </View>
      <View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus.
        </Text>
        <View style={styles.buttonContainer}>
          <Button appearance="ghost">ler mais</Button>
          <Button accessoryLeft={comment} appearance="ghost">
            Faça um comentário
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryPink,
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 14,
  },
  header: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  profile: {
    flexDirection: "row",
  },
  name: {
    margin: 5,
  },
  h3: {
    fontWeight: "600",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
