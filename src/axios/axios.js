import axios from "axios";
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import log from "loglevel";

const instance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
});

instance.interceptors.request.use((config) => {
    const configClone = _.cloneDeep(config);
    AsyncStorage.getItem('token').then((token) => {
        if (token) {
            configClone.headers = {
                ...configClone.headers,
                Authorization: `Bearer ${token}`,
            };
        }
    }).catch((error) => {
        log.error(error);
    })
    return configClone;
})

export default instance;
