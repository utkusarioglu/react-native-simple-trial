import React, { type FC, useState, useEffect } from "react";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { type AppNavigatorParams } from "_types/navigation.types";
import ethereumService from "src/services/ethereum/ethereum.service";
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
  const [blockNums, setBlockNums] = useState<number[]>([]);

  useEffect(() => {
    ethereumService.doThings(e => {
      setBlockNums(n => [...n, e]);
    });
  }, []);

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
        <Text category="h1">Messages</Text>
        <Button>Button</Button>
        <Text>{JSON.stringify(blockNums)}</Text>
      </TopLeftLayout>
    </SafeAreaView>
  );
};

export default MessagesScreen;
