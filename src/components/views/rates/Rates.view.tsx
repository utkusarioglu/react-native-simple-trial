import React, { type FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useExchangeRates } from "_hooks/currency.hook";
import { Card, Text } from "react-native-paper";
import { BaseCurrencies } from "_services/rest/rest.service.types";

const baseCurrency = "usd" as BaseCurrencies;

const RatesView: FC<{}> = () => {
  const { timestamp, date, list } = useExchangeRates(baseCurrency);

  if (!timestamp) {
    return <Text>Loading...</Text>;
  }

  if (!list.length) {
    return <Text>Empty List</Text>;
  }

  const localDateString = new Date(date).toLocaleDateString();

  return (
    <View>
      <Text style={styles.rateDate} variant="labelMedium">
        Rates for {localDateString}
      </Text>
      <FlatList
        data={list}
        renderItem={({ item: { symbol, rate } }) => (
          <Card style={styles.card}>
            <Card.Title title={symbol} subtitle={rate} />
            <Card.Content>
              <Text>This is the content</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  rateDate: {
    textAlign: "center",
    marginBottom: 10,
  },
});

export default RatesView;
