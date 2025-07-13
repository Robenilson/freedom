import { Tabs } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function LayoutTabs() {
  return (
    <Tabs>
      <Tabs.Screen
        name="complaint"
        options={{
          headerShown: false,
          title: "Denucias",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="exclamation" size={24} color="#F0B9C3" />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color="#F0B9C3"></FontAwesome5>
          ),
        }}
      />

      <Tabs.Screen
        name="blog"
        options={{
          headerShown: false,
          title: "Blog",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="microblog" size={24} color="#F0B9C3" />
          ),
        }}
      />
    </Tabs>
  );
}
