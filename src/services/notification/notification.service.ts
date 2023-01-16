import notifee from "@notifee/react-native";

interface NotificationContent {
  title: string;
  body: string;
  smallIcon?: string;
}

class NotificationService {
  public async notifyCurrencySelect(content: NotificationContent) {
    await notifee.requestPermission();
    const id = "currencySelect";
    const channelId = await notifee.createChannel({
      id,
      name: "Currency Select",
    });
    await notifee.displayNotification({
      id: content.title,
      title: content.title,
      body: content.body,
      android: {
        channelId,
        smallIcon: content.smallIcon,
        pressAction: {
          id,
        },
      },
    });
  }
}

export default new NotificationService();
