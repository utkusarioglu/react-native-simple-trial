import React, { type FC } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginCardView from "_views/login/login.view";

const LoginLayout: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topShim} />
      <View style={styles.loginViewContainer}>
        <LoginCardView />
      </View>
      <View style={styles.topDecoration} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topDecoration: {
    top: 0,
    height: Dimensions.get("window").height / 2,
    width: Dimensions.get("window").width * 2,
    zIndex: 0,
    position: "absolute",
    backgroundColor: "#666666",
    transform: [
      { rotateZ: "-40deg" },
      { scale: 1.5 },
      { translateX: -40 },
      { translateY: -150 },
    ],
  },
  topShim: {
    flex: 6,
  },
  loginViewContainer: {
    zIndex: 1,
    flex: 5,
    padding: 20,
  },
});

export default LoginLayout;
