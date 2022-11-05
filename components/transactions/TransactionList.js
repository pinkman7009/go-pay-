import { FlatList, StyleSheet } from "react-native";
import TransactionItem from "./TransactionItem";

export default function TransactionList() {
  const transactions = [
    {
      key: 1,
      to: "Vivek Matalia",
      date: "22nd September, 2022",
      amount: "₹425",
      purpose: "Grocery amount",
    },
    {
      key: 2,
      to: "Soumik Chaudhuri",
      date: "16th October, 2022",
      amount: "₹1000",
      purpose: "WIFI Bill",
    },
    {
      key: 3,
      to: "Pavan Komisetty",
      date: "19th November, 2021",
      amount: "₹5500",
      purpose: "Rent",
    },
    {
      key: 4,
      to: "Sashi Kiran",
      date: "17th September, 2022",
      amount: "₹275",
      purpose: "Food",
    },
  ];
  return (
    <FlatList
      data={transactions}
      renderItem={({ item }) => <TransactionItem item={item} />}
    />
  );
}

const styles = StyleSheet.create({});
