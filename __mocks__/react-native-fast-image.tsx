import React from "react";
import { Image } from "react-native";

const MockFastImage = (props: any) => {
  const { onFastImageError, ...otherProps } = props;

  return (
    <Image
      {...otherProps}
      testID="game-image"
      onFastImageError={() => onFastImageError && onFastImageError()}
    />
  );
};

export default MockFastImage;
