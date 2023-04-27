import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setGames } from "../store/gameSlice";
import { RootState } from "../store/store";
import { Game } from "../types/Game";
import { GameCard, GameImage, GameTitle } from "./styled";
import gamesData from "../data/games.json";

const GameList = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.games);

  useEffect(() => {
    dispatch(setGames(gamesData));
  }, [dispatch]);

  const showToast = (gameTitle: string) => {
    // Implement custom Android bridge here.
  };

  const renderItem = ({ item }: { item: Game }) => {
    const imageUrl = `https://steamcdn-a.akamaihd.net/steam/apps/251570/library_600x900_2x.jpg`;

    return (
      <TouchableOpacity onPress={() => showToast(item.title)}>
        <GameCard>
          <GameImage source={{ uri: imageUrl }} />
          <GameTitle>{item.title}</GameTitle>
        </GameCard>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {games && (
        <FlatList
          data={games}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default GameList;
