import axios from "axios";
import _ from 'lodash';
import * as SecureStore from 'expo-secure-store';

const instance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
});

instance.interceptors.request.use(async (config) => {
    const configClone = _.cloneDeep(config);
    const token = await SecureStore.getItemAsync('token');
    if (token) {
        configClone.headers = {
            ...configClone.headers,
            Authorization: `Bearer ${token}`,
        };
    }
    return configClone;
})

export default instance;
