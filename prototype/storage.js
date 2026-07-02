import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeGet(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

export async function storeSet(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // ignore write errors — app still works in-memory for the session
  }
}
