import { encryptData, decryptData } from "./CryptService";

const STORAGE_ITEMS_PREFIX = '@passguard_application/';

export const putDataInStorage = (itemName: string, objectToStorage: any) => {
    let objectString = encryptData(JSON.stringify(objectToStorage));

    localStorage.setItem(STORAGE_ITEMS_PREFIX + itemName, objectString);
}

export const getDataInStorage = (itemName: string) => {
    let storageItem = localStorage.getItem(STORAGE_ITEMS_PREFIX + itemName);
    return JSON.parse(decryptData(storageItem));
}