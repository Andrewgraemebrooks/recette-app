import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import useRecipeStore from '../store/recipes';

export default function HomeScreen(props) {
  const { navigation } = props;
  const recipes = useRecipeStore((state) => state.recipes);
  const fetchRecipes = useRecipeStore((state) => state.fetchRecipes);

  React.useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const renderItem = ({ item }) => (
    <Pressable
      style={({ pressed }) => [
        styles.itemContainer,
        {
          backgroundColor: pressed ? '#f0f0f0' : '#f9c2ff',
        },
      ]}
      onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}
    >
      {({ pressed }) => (
        <Text style={[styles.title, { opacity: pressed ? 0.5 : 1 }]}>{item.name}</Text>
      )}
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Recipes</Text>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
});
