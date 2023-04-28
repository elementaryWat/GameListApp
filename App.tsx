import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/store";
import GameList from "./src/components/GameList";

export default function App() {
  return (
    <Provider store={store}>
      <GameList />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
