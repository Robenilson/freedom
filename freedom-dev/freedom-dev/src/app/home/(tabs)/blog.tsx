import { globalStyle } from "@/ui/styles/global-style";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, IconElement } from "@ui-kitten/components";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CardComplaintBlog from "@/ui/components/cards/Card-complaint-blog";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const gobackIcon = (props: any): IconElement => (
  <FontAwesome6 name="arrow-left" size={24} color="black" />
);

const writeComment = (props: any): IconElement => (
  <MaterialCommunityIcons name="comment-edit" size={24} color="black" />
);
export default function Blog() {
  return (
    <SafeAreaView style={globalStyle.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Button
            accessoryLeft={gobackIcon}
            appearance="ghost"
            status="basic"
            style={styles.backButton}
          >
            Voltar
          </Button>

          <Text style={styles.h1}>Blog</Text>
        </View>

        <View style={styles.secondaryContainer}>
          <Text style={styles.h3}>Saiba mais</Text>
          <Text style={styles.description}>informativos, notícias e +</Text>
        </View>

        <View style={styles.contentCards}>
          <View style={styles.contentTitle}>
            <View>
              <Text style={styles.h3}>O que aconteceu?</Text>
              <Text style={styles.description}>
                Nós queremos saber! Compartilhe e ajude
              </Text>
            </View>
            <Button
              accessoryLeft={writeComment}
              appearance="ghost"
              status="basic"
            ></Button>
          </View>
          <CardComplaintBlog />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 18,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 50,
  },

  backButton: {
    position: "absolute",
    left: 0,
  },

  h1: {
    fontSize: 40,
    fontWeight: "500",
    color: "#703540",
    textAlign: "center",
  },

  h3: {
    color: "#703540",
    fontSize: 20,
    fontWeight: "500",
  },

  description: {
    color: "rgb(146, 146, 146)",
    fontSize: 16,
  },
  secondaryContainer: {
    paddingTop: 15,
  },
  contentCards: {},
  contentTitle: {},
});
