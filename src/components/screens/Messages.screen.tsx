import React, { type FC } from "react";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { type AppNavigatorParams } from "_types/navigation.types";
import CurrencyListView from "_views/currency-list/CurrencyList.view";

import {
  Button,
  Divider,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import TopLeftLayout from "_layouts/TopLeft.layout";

type MessagesScreenProps = NativeStackScreenProps<
  AppNavigatorParams,
  "Messages"
>;

const MessagesScreen: FC<MessagesScreenProps> = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={<Text>◀</Text>} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopLeftLayout>
        <TopNavigation
          title="MyApp"
          alignment="center"
          accessoryLeft={BackAction}
        />
        <Divider />
        <CurrencyListView />
        {/* <BackIcon height={20} width={20} /> */}
        <Text category="h1">Messages</Text>
        <Button>Button</Button>
      </TopLeftLayout>
    </SafeAreaView>
  );
};

export default MessagesScreen;
