import { MMKV } from 'react-native-mmkv';

export const LOCAL_STORAGE_KEYS = {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    userId: 'userId',
};

export const AsyncStorage = new MMKV();

export function setItemInAsyncStorage(key: string, value: any) {
    return AsyncStorage.set(key, JSON.stringify(value));
}

export function getItemFromAsyncStorage(key: string) {
    const res = AsyncStorage.getString(key);
    return res ? JSON.parse(res) : null;
}

export function removeItemFromAsyncStorage(key: string) {
    return AsyncStorage.delete(key);
}

export function emptyAsyncStorage() {
    AsyncStorage.clearAll();
}