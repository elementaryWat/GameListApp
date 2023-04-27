import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setGames } from "../store/gameSlice";
import { RootState } from "../store/store";
import { Game } from "../types/Game";
import { GameCard, GameImage, GameTitle } from "./styled";
import gamesData from "../data/games.json";
import FastImage from "react-native-fast-image";

const GameList = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.games);

  useEffect(() => {
    dispatch(setGames(gamesData));
  }, [dispatch]);

  const showToast = (gameTitle: string) => {
    // Implement custom Android bridge here.
  };

  const extractIdFromSteamUrl = (steamUrl: string): string => {
    const idMatch = steamUrl.match(/\/app\/(\d+)/);
    return idMatch ? idMatch[1] : "";
  };

  const renderItem = ({ item }: { item: Game }) => {
    const imageId = extractIdFromSteamUrl(item.steamUrl);
    const imageUrl = `https://steamcdn-a.akamaihd.net/steam/apps/${imageId}/library_600x900_2x.jpg`;
    const fallbackImageUrl = "https://via.placeholder.com/300x450";

    return (
      <TouchableOpacity onPress={() => showToast(item.title)}>
        <GameCard>
          <GameImage
            source={{
              uri: imageUrl,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
            defaultSource={fallbackImageUrl}
          />

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
