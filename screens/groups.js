import { StyleSheet, Text, View } from "react-native";
import GroupList from "../components/groups/GroupList";

export default function GroupsScreen() {
  const groups = [
    {
      key: 1,
      name: "Flat Expenses",
      noOfParticipants: 5,
      dueAmount: 1000,
      owedAmount: 1200,
    },

    {
      key: 2,
      name: "Goa Trip",
      noOfParticipants: 5,
      dueAmount: 0,
      owedAmount: 308,
    },

    {
      key: 3,
      name: "Birthday outing",
      noOfParticipants: 5,
      dueAmount: 757,
      owedAmount: 0,
    },
    {
      key: 4,
      name: "College expenses",
      noOfParticipants: 5,
      dueAmount: 129,
      owedAmount: 300,
    },
  ];

  const totalDueAmount = groups.reduce(
    (partialSum, a) => partialSum + a.dueAmount,
    0
  );
  const totalOwedAmount = groups.reduce(
    (partialSum, a) => partialSum + a.owedAmount,
    0
  );

  return (
    <>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Total Due Amount{" "}
            <Text style={styles.colorText}>{totalDueAmount}</Text>
          </Text>

          <Text style={styles.headerText}>
            Total Owed Amount{" "}
            <Text style={styles.colorGreenText}>{totalOwedAmount}</Text>
          </Text>
        </View>

        <GroupList groups={groups} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: "#06283D",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 30,
  },
  colorText: {
    color: "#FB2576",
  },
  colorGreenText: {
    color: "green",
  },
  input: {
    width: 200,
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 16,
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 100,
  },
  buttonContainer: {
    marginTop: 50,
  },
});
