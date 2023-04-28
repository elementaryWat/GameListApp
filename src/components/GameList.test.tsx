import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import { Provider } from "react-redux";
import GameList from "./GameList";
import store from "../store/store";

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
});
