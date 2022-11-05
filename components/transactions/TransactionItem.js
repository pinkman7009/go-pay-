import { View, Text, FlatList, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TransactionItem({ item }) {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.cardGroup}>
          <Text style={styles.labelText}>To</Text>
          <Text style={styles.bodyText}>{item.to}</Text>
        </View>
        <View style={styles.cardGroup}>
          <Text style={styles.labelText}>Date</Text>
          <Text style={styles.bodyText}>{item.date}</Text>
        </View>
        <View style={styles.cardGroup}>
          <Text style={styles.labelText}>Purpose</Text>
          <Text style={styles.bodyText}>{item.purpose}</Text>
        </View>
      </View>
      <View style={styles.user}>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    height: 120,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardGroup: {
    flexDirection: "row",
  },
  labelText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  bodyText: {
    color: "#5F6F94",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  amount: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
  },
});
