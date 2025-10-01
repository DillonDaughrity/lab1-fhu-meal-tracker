import { StyleSheet } from "react-native";

import ProgressBar from "@/components/ProgressBar";
import { Text, View } from "@/components/Themed";

export default function DashboardScreen() {
 
  let diningDollarsCurrent = 73.38;
  let diningDollarsTotal = 120;
  
  let mealsCurrent = 9;
  let mealsTotal = 14;

  let equivalenciesCurrent = 3;
  let equivalenciesTotal = 5;

  let chickfilaCurrent = 1;
  let chickfilaTotal = 2;

  return (
    <View style={styles.container}
    lightColor="#661424"
    darkColor="#3F0C16"
    >
      <Text style={styles.title}>Meal Swipe Tracker</Text>

      <View
        style={styles.separator}
        lightColor="#53101D"
        darkColor="#53101D"
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

      <ProgressBar
        title="Meal Equivalencies"
        label={`${equivalenciesCurrent} / ${equivalenciesTotal}`}
        percentage={Math.round((equivalenciesCurrent / equivalenciesTotal) * 100)}
      />

      <ProgressBar
        title="Chick-Fil-A Swipes"
        label={`${chickfilaCurrent} / ${chickfilaTotal}`}
        percentage={Math.round((chickfilaCurrent / chickfilaTotal) * 100)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 40,
    color: "#FFCE02",
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});