import { View, Text, FlatList, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function PeopleItem({ item }) {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.cardGroup}>
          <Text style={styles.labelText}>Name</Text>
          <Text style={styles.bodyText}>{item.name}</Text>
        </View>
        <View style={styles.cardGroup}>
          <Text style={styles.labelText}>Phone</Text>
          <Text style={styles.bodyText}>{item.phone}</Text>
        </View>
      </View>
      <View style={styles.user}>
        <AntDesign name="user" size={35} />
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
  user: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
