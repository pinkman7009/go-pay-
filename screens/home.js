import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import PeopleList from "../components/people/PeopleList";
import TransactionList from "../components/transactions/TransactionList";

import * as SecureStore from "expo-secure-store";

export default function HomeScreen({ navigation }) {
  const [tab, setTab] = useState("People");

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={async () => {
            await SecureStore.deleteItemAsync("secure_token");
          }}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>Logout</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Scanner");
            }}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="qrcode-scan" size={30} />
              <Text style={styles.iconText}>Scan / Pay</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Groups");
            }}
          >
            <View style={styles.iconContainer}>
              <MaterialIcons name="groups" size={30} />
              <Text style={styles.iconText}>Groups</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Wallets");
            }}
          >
            <View style={styles.iconContainer}>
              <Entypo name="wallet" size={30} />
              <Text style={styles.iconText}>Wallets</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PayUPI");
            }}
          >
            <View style={styles.iconContainer}>
              <Entypo name="email" size={30} />
              <Text style={styles.iconText}>Pay UPI ID</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setTab("People")}>
            <View
              style={
                tab === "People"
                  ? { ...styles.tabItem, backgroundColor: "#000" }
                  : styles.tabItem
              }
            >
              <Text style={styles.tabText}>People</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab("Transactions")}>
            <View
              style={
                tab === "Transactions"
                  ? { ...styles.tabItem, backgroundColor: "#000" }
                  : styles.tabItem
              }
            >
              <Text style={styles.tabText}>Transactions</Text>
            </View>
          </TouchableOpacity>
        </View>
        {tab === "People" ? <PeopleList /> : <TransactionList />}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: "#06283D",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 48,
    backgroundColor: "#fff",
    height: 100,
    borderRadius: 10,
    padding: 20,
  },
  iconContainer: {
    alignItems: "center",
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 48,
    height: 60,
  },
  tabItem: {
    backgroundColor: "#256D85",
    width: 150,
    margin: 10,
    alignSelf: "center",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  tabText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  iconText: {
    marginTop: 10,
    fontWeight: "bold",
  },
});
