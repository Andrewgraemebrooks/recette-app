import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import axios from '../axios/axios'

const useAuthStore = create((set) => ({
  token: '',
  register: async (data) => {
    const response = await axios.post('/api/mobile/register', data)
    await SecureStore.setItemAsync('token', response.data);
    set({ token: response.data })
  },
  login: async (data) => {
    const response = await axios.post('/api/mobile/login', data)
    await SecureStore.setItemAsync('token', response.data);
    set({ token: response.data })
  },
}))

export default useAuthStore;