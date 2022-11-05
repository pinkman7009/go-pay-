import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import axios from "axios";

export default function LoginScreen({ navigation }) {
  const [phoneNo, setPhoneNo] = useState("");

  const onPressHandler = async () => {
    if (phoneNo) {
      const reqBody = {
        contactNumber: `+91${phoneNo}`,
        IMEI: "1",
      };

      console.log(reqBody);
      try {
        const response = await axios.post(
          "https://gopay1.herokuapp.com/api/v1/user/login",
          reqBody
        );

        navigation.navigate("OTP", { phoneNo });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Hey there!</Text>
          <Text style={styles.headerText}>
            Welcome to <Text style={styles.colorText}>GoPay</Text>
          </Text>

          {/* login form */}
          <View style={styles.form}>
            <TextInput
              keyboardType="phone-pad"
              placeholder="Enter your phone number"
              style={styles.input}
              value={phoneNo}
              onChangeText={(val) => setPhoneNo(val)}
            />
            <View style={styles.buttonContainer}></View>
            <PrimaryButton text="Login" onPress={onPressHandler} />
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
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 40,
  },
  colorText: {
    color: "#FB2576",
  },
  form: {},
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 16,
    marginTop: 100,
  },
  buttonContainer: {
    marginTop: 50,
  },
});
