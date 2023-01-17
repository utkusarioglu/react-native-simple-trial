import React, { type FC } from "react";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { type AppNavigatorParams } from "_types/navigation.types";
import CurrencyListView from "_views/currency-list/CurrencyList.view";
import { Button, Text, Appbar } from "react-native-paper";

type MessagesScreenProps = NativeStackScreenProps<
  AppNavigatorParams,
  "Messages"
>;

const MessagesScreen: FC<MessagesScreenProps> = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={navigateBack}
          accessibilityLabelledBy="button"
          accessibilityLanguage="EN-US"
        />
        <Appbar.Content
          title="Messages"
          accessibilityLabelledBy="title"
          accessibilityLanguage="EN-US"
        />
      </Appbar.Header>
      <Text>Messages</Text>
      <Button icon="camera">Button</Button>
      <CurrencyListView />
    </SafeAreaView>
  );
};

export default MessagesScreen;
