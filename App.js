import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/login";
import OTPScreen from "./screens/otp";
import HomeScreen from "./screens/home";
import GroupsScreen from "./screens/groups";
import Scanner from "./components/Scanner";
import PaymentScreen from "./screens/payment";
import WalletsScreen from "./screens/wallets";
import PayUPIScreen from "./screens/payUpi";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} /> */}

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Groups" component={GroupsScreen} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Wallets" component={WalletsScreen} />
        <Stack.Screen name="PayUPI" component={PayUPIScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
