import { View, Text, FlatList, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function GroupItem({ item }) {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.cardGroup}>
          <Text style={styles.labelText}>Name of Group</Text>
          <Text style={styles.bodyText}>{item.name}</Text>
        </View>
        <View style={styles.cardGroup}>
          <Text style={styles.labelText}>No. of Participants</Text>
          <Text style={styles.bodyText}>{item.noOfParticipants}</Text>
        </View>
        <View style={styles.cardGroup}>
          <Text style={styles.labelText}>You owe</Text>
          <Text style={styles.bodyText}>{item.dueAmount}</Text>
        </View>
        <View style={styles.cardGroup}>
          <Text style={styles.labelText}>You get</Text>
          <Text style={styles.bodyText}>{item.owedAmount}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    height: 150,
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
