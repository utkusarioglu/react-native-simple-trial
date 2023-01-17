import React, { type FC } from "react";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type AppNavigatorParams } from "_types/navigation.types";
import HomeTabs from "_navigators/Home.navigator";

type HomeScreenProps = NativeStackScreenProps<AppNavigatorParams, "Home"> & {
  logoutOnPress: () => void;
};

const HomeScreen: FC<HomeScreenProps> = ({ navigation, logoutOnPress }) => {
  return <HomeTabs />;
};

export default HomeScreen;
