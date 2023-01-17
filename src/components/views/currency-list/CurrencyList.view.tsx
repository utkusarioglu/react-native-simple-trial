import React, { type FC } from "react";
import { FlatList } from "react-native";
import { Text, Divider, List } from "react-native-paper";
import notificationService from "src/services/notification/notification.service";
import { useCurrencyListings } from "_hooks/currency.hook";

const CurrencyListView: FC = () => {
  const currencies = useCurrencyListings();

  if (!currencies.timestamp) {
    return <Text>Loading...</Text>;
  }

  if (!currencies.list.length) {
    return <Text>No currencies to list:/</Text>;
  }

  return (
    <FlatList
      data={currencies.list}
      ItemSeparatorComponent={Divider}
      keyExtractor={item => item.symbol}
      renderItem={({ item: { symbol, name } }) => (
        <List.Item
          title={symbol}
          description={name}
          left={() => <List.Icon icon="folder" />}
          onPress={() =>
            notificationService.notifyCurrencySelect({
              title: symbol,
              body: `You have selected ${name}`,
            })
          }
          accessibilityLabelledBy=""
          accessibilityLanguage="EN-US"
        />
      )}
    />
  );
};

export default CurrencyListView;
