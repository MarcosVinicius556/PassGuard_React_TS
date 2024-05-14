import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUserSavedPasswords } from "../../redux/user/UserActions";
import { getLoggedUserSelector } from "../../redux/user/UserSelector";

import { IUser } from "../../interfaces/User";

export default function Home() {

    const dispatch = useDispatch();
    const userInfo: IUser = useSelector(getLoggedUserSelector);

    console.log('Info do usuário')
    

    useEffect(() => {
        dispatch(loadUserSavedPasswords({ userId: userInfo.id }));
        console.log(userInfo)
    }, [userInfo]);

    return(
        <div>
            <h1> Seja bem vindo { userInfo.nickname }!</h1>
        </div>
    )
}