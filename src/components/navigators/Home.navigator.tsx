import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeLayout from "_layouts/Home.layout";
import CurrenciesLayout from "_layouts/Currencies.layout";
import ProfileLayout from "_layouts/Profile.layout";

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneAnimationEnabled={true}
      shifting={true}
      activeColor="#e91e63">
      <Tab.Screen
        name="Feed"
        component={HomeLayout}
        options={{
          tabBarColor: "#553255",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Currencies"
        component={CurrenciesLayout}
        options={{
          tabBarColor: "#778899",
          tabBarLabel: "Currencies",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileLayout}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#337788",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
