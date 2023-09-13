import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>Hello World</Text>
      <Text style={styles.text}>Messenger!</Text>
      <TouchableOpacity>
        <Text>
          Click Me
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "green",
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
});
