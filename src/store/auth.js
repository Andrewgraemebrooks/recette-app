import { create } from 'zustand';
import log from 'loglevel';
import axios from '../axios/axios'

const useAuthStore = create((set) => ({
  token: '',
  register: async (data) => {
    try {
        const response = await axios.post('/api/mobile/register', data)
        log.debug(response)
        set({ token: response.data })
      } catch (error) {
        log.debug(error);
    }
  },
}))

export default useAuthStore;