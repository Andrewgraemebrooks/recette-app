import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../axios/axios'

const useAuthStore = create((set) => ({
  token: '',
  register: async (data) => {
    const response = await axios.post('/api/mobile/register', data)
    await AsyncStorage.setItem('token', response.data);
    set({ token: response.data })
  },
  login: async (data) => {
    const response = await axios.post('/api/mobile/login', data)
    await AsyncStorage.setItem('token', response.data);
    set({ token: response.data })
  },
}))

export default useAuthStore;