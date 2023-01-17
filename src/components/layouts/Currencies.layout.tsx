import React, { type FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import CurrencyListView from "_views/currency-list/CurrencyList.view";

interface CurrenciesLayoutProps {}

const CurrenciesLayout: FC<CurrenciesLayoutProps> = ({}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Appbar.Header>
        <Appbar.Content
          title="Home"
          accessibilityLabelledBy=""
          accessibilityLanguage="EN-US"
        />
      </Appbar.Header>
      <CurrencyListView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default CurrenciesLayout;
