import { FlatList, StyleSheet, View } from "react-native";
import WalletItem from "./WalletItem";

export default function WalletList({ wallets }) {
  return (
    <FlatList
      contentContainerStyle={styles.grid}
      numColumns={2}
      data={wallets}
      renderItem={({ item }) => <WalletItem item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    marginBottom: 32,
    marginTop: 16,
    alignItems: "center",
  },
});
