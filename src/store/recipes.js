import { create } from 'zustand';
import log from 'loglevel';
import axios from '../axios/axios'

const useRecipeStore = create((set) => ({
  recipes: [],
  fetchRecipes: async (data) => {
    const response = await axios.get('/api/recipe', data)
    log.debug('success');
    set({ recipes: response.data.data })
  },
}))

export default useRecipeStore;