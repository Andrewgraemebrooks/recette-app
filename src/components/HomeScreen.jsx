import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useRecipeStore from '../store/recipes';

export default function HomeScreen() {
  const recipes = useRecipeStore((state) => state.recipes);
  const fetchRecipes = useRecipeStore((state) => state.fetchRecipes);
  React.useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);
  console.log(recipes)
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
