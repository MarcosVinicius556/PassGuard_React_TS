import { encryptData, decryptData } from "./CryptService";

import { STORAGE_ITEMS_PREFIX } from "../utils/StorageItemNames";

export const putDataInStorage = (itemName: string, objectToStorage: any) => {
    let objectString = encryptData(JSON.stringify(objectToStorage));

    localStorage.setItem(STORAGE_ITEMS_PREFIX + itemName, objectString);
}

export const getDataInStorage = (itemName: string) => {
    let storageItem = localStorage.getItem(STORAGE_ITEMS_PREFIX + itemName);
    return JSON.parse(decryptData(storageItem));
}

export const removeDataFromStorage = (itemName: string) => {
    localStorage.removeItem(STORAGE_ITEMS_PREFIX + itemName);
}