import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function PaymentScreen({ navigation, route }) {
  const [upi, setUpi] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    const data = route.params.data.split("&");

    console.log({ data });

    const UPI_ID = data[0].split("=")[1];
    const personName = data[1].split("=")[1].replace("%20", " ");

    setUpi(UPI_ID);
    setName(personName);
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Pay {name}</Text>
          <Text style={styles.smallText}>UPI ID : {upi}</Text>

          {/* login form */}
          <View style={styles.form}>
            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              // value={otp}
              // onChangeText={(val) => setOtp(val)}
            />

            <View style={styles.buttonContainer}></View>
            <PrimaryButton text="Pay" />
          </View>
        </View>
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
    marginTop: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 40,
  },
  smallText: {
    color: "#fff",
    fontSize: 20,
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
