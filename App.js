import { View } from "react-native";
import Header from "./components/Header";
import { styles } from "./assets/styles/styles";
import Form from "./components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Form />
    </View>
  );
}
