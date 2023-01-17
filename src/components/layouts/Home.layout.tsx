import React, { type FC } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import CenterCenterLayout from "_layouts/CenterCenter.layout";
import { useNavigation } from "@react-navigation/native";

interface HomeLayoutProps {}

const HomeLayout: FC<HomeLayoutProps> = ({}) => {
  const navigation = useNavigation();
  const navigateToMessages = () => {
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
        <Appbar.Action
          icon="magnify"
          onPress={navigateToMessages}
          accessibilityLabelledBy="Messages"
          accessibilityLanguage="EN-US"
        />
      </Appbar.Header>
      <CenterCenterLayout>
        <View style={styles.buttonContainer}>
          <Text>This will be filled later</Text>
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

export default HomeLayout;
