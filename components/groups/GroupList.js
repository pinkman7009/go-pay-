import { FlatList, StyleSheet } from "react-native";
import GroupItem from "./GroupItem";

export default function GroupList({ groups }) {
  return (
    <FlatList
      data={groups}
      renderItem={({ item }) => <GroupItem item={item} />}
    />
  );
}

const styles = StyleSheet.create({});
