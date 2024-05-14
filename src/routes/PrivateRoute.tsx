import React from 'react';
import { useSelector } from 'react-redux';
import { ITokenDTO } from '../interfaces/TokenDTO';
import Unauthorized from '../pages/Unauthorized';
import { getLoggedSelector } from '../redux/user/UserSelector';
import { getDataInStorage } from '../service/StorageService';
import { CREDENTIALS_ITEM_NAME } from '../utils/StorageItemNames';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {

    const isLogged = useSelector(getLoggedSelector);
    if(!isLogged) 
        return <Unauthorized message="Você não está logado na aplicação! Por favor, realize o login!" />

    const credentialsStored: ITokenDTO = getDataInStorage(CREDENTIALS_ITEM_NAME);
    let dateExpire = new Date(credentialsStored.expires_at);
    if(dateExpire > new Date()) {
        return <Unauthorized message="Suas credenciais estão vencidas! Por favor, realize o login novamente!" />
    }

    return children;
}