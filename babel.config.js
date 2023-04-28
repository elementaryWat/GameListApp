module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "@babel/plugin-transform-react-jsx",
        {
          runtime: "automatic",
          importSource: "react",
        },
      ],
      [
        "@babel/plugin-transform-react-jsx-development",
        {
          runtime: "automatic",
          importSource: "react",
        },
      ],
    ],
  };
};
