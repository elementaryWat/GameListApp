import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setGames } from "../store/gameSlice";
import { RootState } from "../store/store";
import { Game } from "../types/Game";
import { GameCard, GameImage, GameTitle } from "./styled";
import gamesData from "../data/games.json";
import FastImage from "react-native-fast-image";
import ToastModule from "./native/ToastModule";

const GameList = () => {
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.games);
  const fallbackImageUrl =
    "https://t3.ftcdn.net/jpg/01/35/88/24/360_F_135882430_6Ytw6sJKC5jg8ovh18XjAHuMXcS7mlai.jpg";

  useEffect(() => {
    // const fetchGames = async () => {
    //   const response = await fetch(
    //     "https://gist.github.com/aclement-ikarusdev/5dd618bf13ac76cebfa08c0e3c99b677/raw/2b2f2e0c0f7e1c9a3b65dab065a50e2a46c8e29d/games.json"
    //   );
    //   const gamesData: Game[] = await response.json();
    //   dispatch(setGames(gamesData));
    // };

    // fetchGames();
    const updatedGames = gamesData.map((game) => {
      let imageUrl;
      if (game.steamUrl) {
        const imageId = extractIdFromSteamUrl(game.steamUrl);
        imageUrl = `https://steamcdn-a.akamaihd.net/steam/apps/${imageId}/library_600x900_2x.jpg`;
      }

      return { ...game, imageUrl: imageUrl || fallbackImageUrl };
    });

    dispatch(setGames(updatedGames));
  }, [dispatch]);

  const showToast = (gameTitle: string) => {
    ToastModule.showToast(gameTitle);
  };

  const extractIdFromSteamUrl = (steamUrl: string): string => {
    const idMatch = steamUrl.match(/\/app\/(\d+)/);
    return idMatch ? idMatch[1] : "";
  };

  const renderItem = ({ item }: { item: Game }) => {
    const handleImageError = (itemId: number) => {
      const currentGameIndex = games.findIndex((game) => game.id === itemId);
      if (currentGameIndex >= 0) {
        const updatedGames = [...games];
        updatedGames[currentGameIndex].imageUrl = fallbackImageUrl;
        dispatch(setGames(updatedGames));
      }
    };
    return (
      <TouchableOpacity onPress={() => showToast(item.title)}>
        <GameCard testID="game-card">
          <GameImage
            source={{
              uri: item.imageUrl,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
            onError={() => handleImageError(item.id)}
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
