import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const SpinGame = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Spin Game</Text>
    </SafeAreaView>
  )
}
export default SpinGame
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // You can change this to your preferred background color
  },
  text: {
    fontFamily: "Poppins-SemiBold", // Assuming you have this font set up
    fontSize: 20,
    color: "#000",
  },
});
