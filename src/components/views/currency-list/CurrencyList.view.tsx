import React, { type FC, useState, useEffect } from "react";
import { Divider, List, ListItem, Text } from "@ui-kitten/components";
import notificationService from "src/services/notification/notification.service";

const CURRENCIES_LIST_API =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";

interface CurrencyListing {
  symbol: string; // ex: USD
  name: string; // ex: United States Dollar
}

interface CurrencyListings {
  timestamp: number; // epoch
  list: CurrencyListing[];
}

const INITIAL_CURRENCY_LISTING = {
  timestamp: 0,
  list: [],
};

function useCurrencyListings() {
  const [currencies, setCurrencies] = useState<CurrencyListings>(
    INITIAL_CURRENCY_LISTING,
  );
  useEffect(() => {
    fetch(CURRENCIES_LIST_API)
      .then(data => data.json())
      .then(json => {
        const list = Object.entries<string>(json).map(([key, value]) => ({
          symbol: value!,
          name: key!,
        }));
        const timestamp = Date.now();
        setCurrencies({ timestamp, list });
      });
  }, []);
  return currencies;
}

const CurrencyListView: FC = () => {
  const currencies = useCurrencyListings();

  if (!currencies.timestamp) {
    return <Text>Loading...</Text>;
  }

  if (!currencies.list.length) {
    return <Text>No currencies to list:/</Text>;
  }

  return (
    <List
      data={currencies.list}
      ItemSeparatorComponent={Divider}
      renderItem={({ item: { symbol, name } }) => (
        <ListItem
          key={symbol}
          title={symbol}
          description={name}
          onPress={() =>
            notificationService.notifyCurrencySelect({
              title: symbol,
              body: `You have selected ${name}`,
            })
          }
        />
      )}
    />
  );
};

export default CurrencyListView;
