import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
export default function Index() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const resetCount = () => setCounter(0);
  const decrement = () => setCounter(counter - 1);

  return (
    <View style={styles.contenitore}>
      <Text>Counting </Text>

      <Button onPress={increment} title="Aumenta" />
      <Button onPress={resetCount} title="Reset" />
      <Button onPress={decrement} title="Diminuisci" />

      <Text> conteggio: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
