import React, { type FC } from "react";
import { StyleSheet, Button } from "react-native";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { type AppNavigatorParams } from "_types/navigation.types";
import LoginLayout from "_layouts/login.layout";

type LoginScreenParams = NativeStackScreenProps<AppNavigatorParams, "Login"> & {
  loginOnPress: () => void;
};

const LoginScreen: FC<LoginScreenParams> = ({
  navigation: { navigate },
  loginOnPress,
}) => (
  <SafeAreaView style={styles.safeAreaView}>
    <LoginLayout />
    {/* <Button onPress={loginOnPress} title="Login" />
    <Button
      title="Help"
      onPress={() => navigate("Help", { content: "This is the content" })}
    /> */}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default LoginScreen;
