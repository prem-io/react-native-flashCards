# Udaci-Flashcards

Udacity React Nanodegree final project - Mobile Flashcards App using React Native

## Project Description

Flashcards is a mobile application for Android and iOS, that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called as "Decks" and can add unlimited flashcards called as 'QueCard' to respective decks and then they can take quizzes on those decks. There is a bonus feature to the user, where-in there will be notification to the user if the user forgets to take the quiz for the day.
This app uses AsyncStorage for local database, the state of this application is managed locally.

## Features

- Create/Delete decks
- Add flashcards to decks
- Take the quiz for each deck
- Daily study reminder with notification

## Test Devices

The application was fully tested on Android: OnePlus 6, 7, 7T Devices.

## Pre-requisites

This application was built using [Expo](https://expo.io/) tool called 'create-react-native-app', as a result, you need NodeJS and NPM (or Yarn) to start it. The NodeJS installer includes the NPM package manager.

## Installation Procedure

```bash
git clone https://github.com/prem-io/react-native-flashCards.git
cd react-native-flashCards
```

- Install all project dependencies with
  `npm install` or `yarn install`

## Running the application

To run the application on your Android device, download the Expo app from the Google Play Store and scan the QR code which is displayed in the command like window after running

- Start the development server with `npm start` or `yarn start` or `expo start`

Also make sure you have the Expo-cli tool installed on your system for a smooth running/testing of this app.

## Future improvements

- Keep track of score for each deck / history of scores
- Edit / Delete flashcard from a deck
- Swipe list item to edit / delete card decks
- Edit / Delete the entire deck

## Resources and Documentation

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)
- [Project Rubric](https://review.udacity.com/#!/rubrics/1021/view)
- [Royalty Free Icons](https://www.flaticon.com/)
