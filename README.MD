# React Native Game List App

This is a React Native app built with Expo, Typescript, Styled Components, and Redux Toolkit. It showcases a list of games fetched from a local JSON file. When a game is clicked, a toast notification is triggered using a custom Android bridge, displaying the name of the game that was pressed.

## Features

- Displays a scrollable list of game cards
- Shows game images fetched dynamically based on the game's Steam URL
- Displays a generic image if the game image is not found
- Includes error handling and test cases
- Uses a custom Android bridge for toast notifications

## Demo

![Demo GIF](https://github.com/elementaryWat/GameListApp/blob/master/recording-app.gif)

## Installing required dependencies

1. Install [Node.js](https://nodejs.org/en/download/) and [Expo CLI](https://docs.expo.dev/get-started/installation/):

## Clone the repository:

```
git clone https://github.com/elementaryWat/GameListApp.git
cd GameListApp
```

## Install dependencies:

```
yarn
```

## Running the app in Android:

```
yarn android
```

## Running the tests:

```
yarn test
```
