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
import * as SecureStore from "expo-secure-store";

export default function OTPScreen({ navigation, route }) {
  const [otp, setOtp] = useState("");

  const onSubmitHandler = async () => {
    const phoneNo = route.params.phoneNo;
    const reqBody = {
      contactNumber: `+91${phoneNo}`,
      OTP: parseInt(otp),
    };

    try {
      const response = await axios.post(
        "https://gopay1.herokuapp.com/api/v1/user/login/otpCheck",
        reqBody
      );

      const data = await response.data;

      console.log(data);

      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Enter the OTP</Text>

          {/* login form */}
          <View style={styles.form}>
            <View style={styles.otpContainer}>
              <TextInput
                keyboardType="number-pad"
                style={styles.input}
                value={otp}
                onChangeText={(val) => setOtp(val)}
              />
            </View>

            <View style={styles.buttonContainer}></View>
            <PrimaryButton text="Submit" onPress={onSubmitHandler} />
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
