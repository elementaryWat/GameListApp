import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";
import GameList from "./components/GameList/GameList";

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
