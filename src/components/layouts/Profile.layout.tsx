import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { Button, Appbar, Text, Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const SOURCE_IMAGE =
  "https://www.utkusarioglu.com/_next/static/images/utku-1x1-1880-8894350f792cbca71b719e9ef7927363.jpg";

const ProfileLayout = () => {
  const { goBack } = useNavigation();

  const logoutOnPress = () => {
    console.log("This hasn't been implemented yet");
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={goBack}
          accessibilityLabelledBy="Appbar"
          accessibilityLanguage="EN-US"
        />
        <Appbar.Content
          title="Profile"
          accessibilityLabelledBy="Appbar"
          accessibilityLanguage="EN-US"
        />
      </Appbar.Header>
      <View style={styles.content}>
        <View style={styles.avatarContainer}>
          <Avatar.Image
            size={200}
            source={{ uri: SOURCE_IMAGE }}
            style={styles.avatar}
          />
          <Text variant="displayMedium">Hello person!</Text>
        </View>
        <View style={styles.controls}>
          <Button style={styles.button} onPress={logoutOnPress}>
            Logout
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  button: {
    marginBottom: 8,
    width: "100%",
  },
  content: {
    flex: 1,
  },
  avatarContainer: {
    flex: 1,
    // height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    marginBottom: 10,
  },
  controls: {
    flex: 1,
  },
});

export default ProfileLayout;
