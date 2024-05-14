import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUserSavedPasswords } from "../../redux/user/UserActions";
import { getLoggedUserSelector } from "../../redux/user/UserSelector";

import { IUser } from "../../interfaces/User";
import DefaultPageContent from "../../components/DefaultPageContent";
import { HomeContainer } from "./Home.style";

export default function Home() {

    const dispatch = useDispatch();
    const userInfo: IUser = useSelector(getLoggedUserSelector);

    useEffect(() => {
        dispatch(loadUserSavedPasswords({ userId: userInfo.id }));
    }, [userInfo]);

    return(
        <DefaultPageContent>
            <HomeContainer>
                {userInfo.username}
            </HomeContainer>
        </DefaultPageContent>
    )
}