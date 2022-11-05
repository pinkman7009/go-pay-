import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from "react-native";

const ModalScreen = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add a new Wallet</Text>

          <TextInput
            placeholder="Name"
            style={styles.input}
            //   value={phoneNo}
            //   onChangeText={(val) => setPhoneNo(val)}
          />
          <TextInput
            keyboardType="phone-pad"
            placeholder="Amount to allocate"
            style={styles.input}
            //   value={phoneNo}
            //   onChangeText={(val) => setPhoneNo(val)}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Save</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
    height: "auto",
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    width: 100,
  },

  buttonClose: {
    backgroundColor: "#256D85",
  },
  input: {
    backgroundColor: "#EAEAEA",
    borderRadius: 5,
    padding: 16,
    width: "100%",
    margin: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalScreen;
