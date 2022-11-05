import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import WalletList from "../components/wallets/WalletList";
import Modal from "../components/Modal";

export default function WalletsScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const wallets = [
    {
      key: 1,
      name: "Groceries",
      amount: 1000,
      transactions: [
        {
          key: 1,
          to: "Vivek Matalia",
          date: "22nd September, 2022",
          amount: "₹425",
          purpose: "Grocery amount",
        },
        {
          key: 2,
          to: "Sashi Kiran",
          date: "17th September, 2022",
          amount: "₹275",
          purpose: "Food",
        },
      ],
    },

    {
      key: 2,
      name: "Miscelleneous",
      amount: 3000,
      transactions: [
        {
          key: 1,
          to: "Soumik Chaudhuri",
          date: "16th October, 2022",
          amount: "₹1000",
          purpose: "WIFI Bill",
        },
        {
          key: 2,
          to: "Pavan Komisetty",
          date: "19th November, 2021",
          amount: "₹5500",
          purpose: "Rent",
        },
      ],
    },

    {
      key: 3,
      name: "Insurance Bills",
      amount: 10000,
      transactions: [
        {
          key: 1,
          to: "Raghav Talwar",
          date: "16th October, 2022",
          amount: "₹10000",
          purpose: "Life Insurance",
        },
      ],
    },

    {
      key: 4,
      name: "Other Bills",
      amount: 15000,
      transactions: [
        {
          key: 1,
          to: "Raghav Talwar",
          date: "16th October, 2022",
          amount: "₹10000",
          purpose: "Life Insurance",
        },
      ],
    },
  ];

  return (
    <>
      <View style={styles.centeredView}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Your Wallets</Text>
        </View>

        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />

        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Add Wallet</Text>
        </Pressable>

        <WalletList wallets={wallets} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#06283D",
    padding: 40,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#256D85",
    width: 150,
    elevation: 2,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: "#06283D",
    alignItems: "center",
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
});
