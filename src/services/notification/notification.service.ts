import notifee from "@notifee/react-native";

interface NotificationContent {
  title: string;
  body: string;
  smallIcon?: string;
}

class NotificationService {
  public async notifyLogin(content: NotificationContent) {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id: "login",
      name: "Login",
    });
    await notifee.displayNotification({
      id: "a",
      title: content.title,
      body: content.body,
      android: {
        channelId,
        smallIcon: content.smallIcon,
        pressAction: {
          id: "login",
        },
      },
    });
  }
}

export default new NotificationService();
