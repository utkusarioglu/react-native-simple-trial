import React, { type FC } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Appbar } from "react-native-paper";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type AppNavigatorParams } from "_types/navigation.types";
import CenterCenterLayout from "_layouts/CenterCenter.layout";

type HomeScreenProps = NativeStackScreenProps<AppNavigatorParams, "Home"> & {
  logoutOnPress: () => void;
};

const HomeScreen: FC<HomeScreenProps> = ({ navigation, logoutOnPress }) => {
  const navigateMessages = () => {
    navigation.navigate("Messages");
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Appbar.Header>
        <Appbar.Content
          title="Home"
          accessibilityLabelledBy=""
          accessibilityLanguage="EN-US"
        />
      </Appbar.Header>
      <CenterCenterLayout>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={navigateMessages}>
            Messages
          </Button>
          <Button style={styles.button} onPress={logoutOnPress}>
            Logout
          </Button>
        </View>
      </CenterCenterLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 16,
  },
  button: {
    marginBottom: 8,
    width: "100%",
  },
});

export default HomeScreen;
