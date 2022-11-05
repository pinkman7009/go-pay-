import { StyleSheet, Text, View, TextInput } from "react-native";
import PeopleList from "../components/people/PeopleList";
import PrimaryButton from "../components/PrimaryButton";

export default function PaymentScreen() {
  return (
    <>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Enter UPI ID</Text>

          {/* login form */}
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="eg: @paytm, @okicici"
              // value={otp}
              // onChangeText={(val) => setOtp(val)}
            />

            <PrimaryButton text="Pay" />
          </View>
        </View>
        <Text style={styles.smallText}>Recents</Text>

        <PeopleList />
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
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 30,
  },
  smallText: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 20,
  },
  input: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 50,
  },
  buttonContainer: {
    marginTop: 50,
  },
});
