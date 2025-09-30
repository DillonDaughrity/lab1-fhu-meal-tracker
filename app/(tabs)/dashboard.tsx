import { StyleSheet } from "react-native";

import ProgressBar from "@/components/ProgressBar";
import { Text, View } from "@/components/Themed";

export default function DashboardScreen() {
  const stepsCurrent = 8642;
  const stepsGoal = 10000;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <ProgressBar
        title="Steps"
        label={`${stepsCurrent} / ${stepsGoal}`}
        percentage={(stepsCurrent / stepsGoal) * 100}
      />

      <ProgressBar
        title="Steps Yesterday"
        label={`${stepsCurrent + 342} / ${stepsGoal}`}
        percentage={((stepsCurrent + 342) / stepsGoal) * 100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
