# Recette Mobile App - Work In Progress

Welcome to the Recette Mobile App, built with React Native and Expo. This app provides a user-friendly interface for interacting with the Recette API, allowing users to browse, create, and manage recipes on the go.

## Features

- **Create Recipes:** Save your culinary creations by adding new recipes.
- **Ingredient Details:** View and manage individual ingredients.
- **Category Organisation:** Organise recipes efficiently with categorised sections.
- **Grocery Organisation:** Keep track of your groceries.
- **User Authentication:** Secure your personal recipes with user accounts.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [React Native](https://reactnative.dev/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Andrewgraemebrooks/recette-app.git
   ```

2. **Change into the project directory:**
   ```bash
   cd recette-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Copy environment file**
   ```bash
   cp .env.example .env
   ```
5. **Configure API base URL:**
   Open `.env` and update the `EXPO_PUBLIC_BASE_URL` with the URL of your Recette API.
   ```
   EXPO_PUBLIC_BASE_URL='http://localhost:8000'
   ```

6. **Run the app:**
   ```bash
   expo start
   ```

   This will open the Expo Developer Tools in your browser. You can run the app on an emulator, on a physical device using the Expo Go app, or by scanning the QR code with the Expo Go app.

## Usage

1. **Launch the App:**
   Open the app on your mobile device or emulator using the Expo Go app or by running it on an emulator.

2. **Add a Recipe:**
   Create your recipes by providing details, ingredients, and categories.

3. **Manage Ingredients and Categories:**
   Efficiently organise and update individual ingredients and categories.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.