import React from "react";
import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from "@testing-library/react-native";
import { Provider } from "react-redux";
import GameList from "./GameList";
import store from "../store/store";
import gamesData from "../data/games.json";
import { setGames } from "../store/gameSlice";

jest.mock("./native/ToastModule", () => ({
  showToast: jest.fn(),
}));
import ToastModule from "./native/ToastModule";

describe("GameList", () => {
  test("renders a list of games", async () => {
    render(
      <Provider store={store}>
        <GameList />
      </Provider>
    );

    // Using `findAllBy` query to handle multiple instances of the same testID
    const gameCards = await screen.findAllByTestId("game-card");
    expect(gameCards.length).toBeGreaterThan(0);
  });

  test("renders game titles", async () => {
    render(
      <Provider store={store}>
        <GameList />
      </Provider>
    );

    // Using `findByText` query to wait for the element to appear in the DOM
    const gameTitle = await screen.findByText("7 Days to Die");
    expect(gameTitle).toBeTruthy();
  });

  it("sets the fallbackImageUrl when the game image fails to load", async () => {
    const dispatchSpy = jest.spyOn(store, "dispatch");
    const { getAllByTestId } = render(
      <Provider store={store}>
        <GameList />
      </Provider>
    );

    // Simulate an image loading error by calling the onError callback
    const gameImage = getAllByTestId("game-image")[8];
    act(() => {
      gameImage.props.onFastImageError();
    });

    // Wait for the update to propagate
    await waitFor(() => getAllByTestId("game-image")[8]);

    const fallbackImageUrl =
      "https://t3.ftcdn.net/jpg/01/35/88/24/360_F_135882430_6Ytw6sJKC5jg8ovh18XjAHuMXcS7mlai.jpg";
    expect(dispatchSpy).toHaveBeenCalledWith(
      setGames(
        expect.arrayContaining([
          expect.objectContaining({
            imageUrl: fallbackImageUrl,
          }),
        ])
      )
    );

    // Clean up the spy
    dispatchSpy.mockRestore();
  });

  it("shows a toast with the game title when a game is pressed", () => {
    // Render the GameList component
    const { getAllByTestId } = render(
      <Provider store={store}>
        <GameList />
      </Provider>
    );

    // Find the TouchableOpacity for the first game
    const firstGameCard = getAllByTestId("game-card")[0];

    // Simulate pressing the TouchableOpacity
    fireEvent.press(firstGameCard);

    // Check if the showToast method of ToastModule is called with the correct game title
    expect(ToastModule.showToast).toHaveBeenCalledWith(gamesData[0].title);
  });
});
