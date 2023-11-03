import { create } from 'zustand';
import axios from '../axios/axios'

const useAuthStore = create((set) => ({
  token: '',
  register: async (data) => {
    const response = await axios.post('/api/mobile/register', data)
    set({ token: response.data })
  },
  login: async (data) => {
    const response = await axios.post('/api/mobile/login', data)
    set({ token: response.data })
  },
}))

export default useAuthStore;