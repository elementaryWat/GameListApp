import FastImage from "react-native-fast-image";
import styled from "styled-components/native";

export const ErrorView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const ErrorImage = styled(FastImage)`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;
