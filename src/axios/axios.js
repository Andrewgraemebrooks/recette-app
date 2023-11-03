import axios from "axios";
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
});

instance.interceptors.request.use(async (config) => {
    const configClone = _.cloneDeep(config);
    const token = await AsyncStorage.getItem('token')
    if (token) {
        configClone.headers = {
            ...configClone.headers,
            Authorization: `Bearer ${token}`,
        };
    }
    return configClone;
})

export default instance;
