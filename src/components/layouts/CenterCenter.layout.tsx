import { type FC, type ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type CenterCenterLayoutProps = {
  children?: ReactNode | ReactNode[];
};

const CenterCenterLayout: FC<CenterCenterLayoutProps> = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CenterCenterLayout;
