import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";

export default function HomeHeader() {
  console.log("hi");

  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="qrcode-scan" size={30} />
        <Text style={styles.iconText}>Scan / Pay</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.iconContainer}>
        <MaterialIcons name="groups" size={30} />
        <Text style={styles.iconText}>Groups</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.iconContainer}>
        <Entypo name="email" size={30} />
        <Text style={styles.iconText}>Pay UPI ID</Text>
      </View>
    </TouchableOpacity>
  </View>;
}

const styles = StyleSheet.create({
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
  iconText: {
    marginTop: 10,
    fontWeight: "bold",
  },
});
