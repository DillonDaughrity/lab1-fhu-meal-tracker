import { StyleSheet } from "react-native";

import ProgressBar from "@/components/ProgressBar";
import { Text, View } from "@/components/Themed";

export default function DashboardScreen() {
  const mealsCurrent = 9;
  const mealsTotal = 14;

  const diningDollarsCurrent = 73.38;
  const diningDollarsTotal = 120;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Swipe Tracker</Text>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <ProgressBar
        title="Dining Dollars"
        label={`${diningDollarsCurrent} / ${diningDollarsTotal}`}
        percentage={Math.round((diningDollarsCurrent / diningDollarsTotal) * 100)}
      />

      <ProgressBar
        title="Meal Swipes"
        label={`${mealsCurrent} / ${mealsTotal}`}
        percentage={Math.round((mealsCurrent / mealsTotal) * 100)}
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
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});