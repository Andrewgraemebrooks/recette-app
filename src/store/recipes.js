import { create } from 'zustand';
import axios from '../axios/axios'
import log from 'loglevel';

const useRecipeStore = create((set) => ({
  recipes: [],
  fetchRecipes: async (data) => {
    const response = await axios.get('/api/recipe', data)
    log.debug('success');
    set({ recipes: response.data })
  },
}))

export default useRecipeStore;