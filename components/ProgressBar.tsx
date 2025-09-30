import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ProgressBarProps = {
  title: string;
  percentage: number;
  label: string;
};

const ProgressBar = ({title, label, percentage}: ProgressBarProps) => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.rowTitle}> {title} </Text>

            <Text style={styles.rowPercent}> {percentage}% </Text>
        </View>

        <View style={styles.track}>
            <View style={[{width: percentage}, styles.progress]}></View>
        </View>

      <Text> {label} </Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create ({
    container: {
        display: 'flex',
        margin: 5,
        padding: 10,
        justifyContent: 'flex-start',
        borderWidth: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    rowTitle: {
        fontSize: 24,
    },
    rowPercent: {
        fontSize: 24,
        fontWeight: 800,
    },
    track: {
        backgroundColor: '#ccc',
        height: 10,
        overflow: 'hidden',
        borderRadius: 5,
    },
    progress: {
        backgroundColor: '#111',
        borderRadius: 5,
    },
})