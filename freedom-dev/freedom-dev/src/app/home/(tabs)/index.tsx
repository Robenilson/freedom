import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "@/data/contexts/authContext";
import { Avatar } from "@ui-kitten/components";

const Home = () => {
  const router = useRouter();
  const { signOut } = useContext(AuthContext);

  const handleLogout = async () => {
    signOut();
    router.navigate("/login");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Link style={styles.avatarLink} href="/home/modalProfile">
            <Avatar
              size="large"
              source={require("../../../ui/assets/example-profile.png")}
            />
          </Link>
        </View>
        <TouchableOpacity onPress={() => handleLogout()}>
          <Text>Sair</Text>
        </TouchableOpacity>
        <View style={styles.avatar}>
          <Link style={styles.avatarLink} href="/home/modalComplaint">
            <Avatar
              size="large"
              source={require("../../../ui/assets/icon-create-complaint.png")}
            />
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    height: "auto",
    width: "100%",
    flex: 1,
    paddingRight: 30,
  },

  avatar: {
    width: "100%",
    height: "auto",
    alignItems: "flex-end",
  },
  avatarLink: {
    height: "80%",
  },
});
