import { AccordionView } from "@/ui/components/cards/Card-collapsible-complaint-list";
import { globalStyle } from "@/ui/styles/global-style";
import { Button, IconElement } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const gobackIcon = (props: any): IconElement => (
  <FontAwesome6 name="arrow-left" size={24} color="black" />
);
const complaint = () => {
  return (
    <SafeAreaView style={globalStyle.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Button
              accessoryLeft={gobackIcon}
              appearance="ghost"
              status="basic"
              style={styles.backButton}
            >
              Voltar
            </Button>
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.h3}>Lista de</Text>
            <Text style={styles.h1}>Denuncias</Text>
          </View>
          <View>
            <Text>Filtro</Text>
          </View>
        </View>
        <AccordionView />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  headerTitle: {
    alignItems: "center",
  },
  h1: {
    fontSize: 32,
    fontWeight: "500",
    color: "#703540",
    textAlign: "center",
  },
  h3: {
    color: "#703540",
    fontSize: 20,
    fontWeight: "500",
    marginBottom: -8,
  },
});

export default complaint;
