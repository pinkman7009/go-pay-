import { FlatList, StyleSheet } from "react-native";
import PeopleItem from "./PeopleItem";

export default function PeopleList() {
  const people = [
    {
      key: 1,
      name: "Vivek Matalia",
      phone: "+91-8420930711",
    },
    {
      key: 2,
      name: "Soumik Chaudhuri",
      phone: "+91-6290237967",
    },
    {
      key: 3,
      name: "Pavan Komisetty",
      phone: "+91-8420930443",
    },
    {
      key: 4,
      name: "Shaishav Kumar",
      phone: "+91-7298084958",
    },
    {
      key: 5,
      name: "Rajan Gupta",
      phone: "+91-9032138756",
    },
    {
      key: 6,
      name: "Khushi Rastogi",
      phone: "+91-9856734520",
    },
  ];
  return (
    <FlatList
      data={people}
      renderItem={({ item }) => <PeopleItem item={item} />}
    />
  );
}

const styles = StyleSheet.create({});
