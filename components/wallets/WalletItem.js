import { View, Text, FlatList, StyleSheet } from "react-native";

export default function WalletItem({ item }) {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.cardGroup}>
          <Text style={styles.bodyText}>{item.name}</Text>
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
    height: 100,
    width: 170,
    marginTop: 20,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  bodyText: {
    color: "#000",
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
