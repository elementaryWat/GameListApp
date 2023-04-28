import FastImage from "react-native-fast-image";
import styled from "styled-components/native";

export const GameCard = styled.View`
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  elevation: 3;
  shadow-color: #000;
  shadow-offset: 0 4px;
  shadow-opacity: 0.1;
  shadow-radius: 4.65px;
  align-items: center;
`;

export const GameTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
`;

export const GameImage = styled(FastImage)`
  width: 300px;
  height: 450px;
  border-radius: 10px;
`;
