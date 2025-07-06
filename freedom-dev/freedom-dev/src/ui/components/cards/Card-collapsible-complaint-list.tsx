import { Colors } from "@/ui/constants/Colors";
import { Divider } from "@rneui/base";
import { Avatar } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";

const SECTIONS = [
  {
    name: "Maria Clara Santos",
    image: require("../../../ui/assets/example-profile.png"),
    data: "23/04/2025",
    local: "Itapuã",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Lorem ipsum dolor sit amet.",
  },
  {
    name: "Maria Clara Santos",
    image: require("../../../ui/assets/example-profile.png"),
    data: "23/04/2025",
    local: "Itapuã",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Lorem ipsum dolor sit amet.",
  },
];

export function AccordionView() {
  const [state, setState] = useState({ activeSections: [] });

  //

  const _renderHeader = (section: any) => {
    return (
      <>
        <View style={styles.divider}></View>
        <View style={styles.header}>
          <Avatar size="large" source={section.image} />
          <View style={styles.name}>
            <Text style={styles.h3}>{section.name}</Text>
            <Text>
              {section.data} - {section.local}
            </Text>
          </View>
        </View>
      </>
    );
  };

  const _renderContent = (section: any) => {
    return (
      <>
        <View style={styles.container}>
          <Text>{section.content}</Text>
        </View>
        <View style={styles.divider}></View>
      </>
    );
  };

  const _updateSections = (activeSections: any) => {
    setState({ activeSections });
  };

  return (
    <Accordion
      sections={SECTIONS}
      activeSections={state.activeSections}
      containerStyle={{
        backgroundColor: "rgba(161, 217, 240, 1)",
        borderRadius: 10,
        marginTop: 40,
      }}
      //   renderSectionTitle={_renderSectionTitle}
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      onChange={_updateSections}
    />
  );
}

const styles = StyleSheet.create({
  divider: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.Ligth,
  },
  container: {
    marginBottom: 20,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 15,
  },

  name: {
    margin: 5,
  },
  h3: {
    fontWeight: "600",
  },
});
