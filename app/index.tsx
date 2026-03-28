import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
export default function Index() {
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState("verde");

  const increment = () => setCounter(counter + 1);
  const resetCount = () => setCounter(0);
  const decrement = () => setCounter(counter - 1);

  const coloreTesto = counter < 0 ? "red" : counter > 0 ? "green" : "black";

  return (
    <View style={styles.contenitore}>
      <Text style={styles.mainTitle}>Counting </Text>
      <View style={[styles.bottoni]}>
        <Button onPress={increment} title="Aumenta" disabled={counter >= 10} />
      </View>
      <View style={styles.bottoni}>
        <Button onPress={resetCount} title="Reset" />
      </View>
      <View style={styles.bottoni}>
        <Button
          onPress={decrement}
          title="Diminuisci"
          disabled={counter <= -10}
        />
      </View>
      <Text style={[styles.empty, { color: coloreTesto }]}>
        {" "}
        conteggio: {counter}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bottoni: {
    borderRadius: 15,
    marginBottom: 20,
  },

  mainTitle: {
    fontSize: 30,
    marginBottom: 15,
  },

  empty: {},
});
