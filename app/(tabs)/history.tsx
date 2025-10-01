import { FlatList, RefreshControl, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useState } from "react";

const clubs = [
  { id: "1", title: "EP", description: "21!21!21!" },
  { id: "2", title: "XBX", description: "opening prayer" },
  { id: "3", title: "PKA", description: "country" },
  { id: "4", title: "XCD", description: "too cool for school" },
  { id: "5", title: "OX", description: "izzie's club" },
];

export default function HistoryScreen() {

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true)

        setTimeout(() => setRefreshing(false), 2000)
    }

  const renderItem = ({
    item,
  }: {
    item: {
      id: string;
      title: string;
      description: string;
    };
  }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)">

      <FlatList
        data={clubs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}

        ListHeaderComponent={<Text style={styles.title}>Clubs</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        ListEmptyComponent={() => <Text>No clubs found.</Text>}

        refreshControl={
            <RefreshControl 
                onRefresh={onRefresh}
                refreshing={refreshing}
            />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 0,
    height: 1,
    width: "80%",
  },
  item: {
    padding: 20,
    backgroundColor: '#a80e0eff'
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 800,
    paddingBottom: 10,
  },
  itemDescription: {

  }
});
