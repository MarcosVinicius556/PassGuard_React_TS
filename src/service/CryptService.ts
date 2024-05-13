import CryptoJS from 'crypto-js';

const secretPass = 'passguard_application'; //Substituir por variáveis de ambiente

export const encryptData = (data: any) => {
    return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        secretPass
    ).toString();
}

export const decryptData = (data: any) => {
    return JSON.parse(CryptoJS.AES.decrypt(data, secretPass).toString(CryptoJS.enc.Utf8));
}