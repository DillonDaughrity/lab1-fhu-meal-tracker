import { View } from "@/components/Themed";
import React from "react";
import { StyleSheet, Text } from "react-native";

type ProgressBarProps = {
  title: string;
  percentage: number;
  label: string;
};

const ProgressBar = ({title, label, percentage}: ProgressBarProps) => {
  return (
    <View style={styles.container}
    darkColor="#661424"
    lightColor="#53101D">
        <View style={styles.row}
        darkColor="#661424"
        lightColor="#53101D">
            <Text style={styles.rowTitle}> {title} </Text>

            <Text style={styles.rowPercent}> {percentage}% </Text>
        </View>

        <View style={styles.track}>
            <View style={[{width: `${percentage}%`}, styles.progress]}></View>
        </View>

      <Text style={styles.label}> {label} </Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create ({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFCE02',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 10
    },
    rowTitle: {
        fontSize: 24,
        fontWeight: 700,
        color: "#FFCE02"
    },
    rowPercent: {
        fontSize: 24,
        fontWeight: 800,
        color: "#FFCE02"
    },
    track: {
        backgroundColor: '#ccc',
        height: 10,
        overflow: 'hidden',
        borderRadius: 5,
        borderWidth: 2,
        flexDirection: 'row'
    },
    progress: {
        backgroundColor: '#FFCE02',
        borderRadius: 5,
    },
    label: {
        color: '#FFCE02',
        paddingTop: 5
    }
})