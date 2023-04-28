import React from "react";
import FastImage from "react-native-fast-image";
import { ErrorImage, ErrorView } from "./styled";

interface ErrorScreenProps {
  errorImageUrl: string;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ errorImageUrl }) => {
  return (
    <ErrorView>
      <ErrorImage
        source={{ uri: errorImageUrl }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </ErrorView>
  );
};

export default ErrorScreen;
