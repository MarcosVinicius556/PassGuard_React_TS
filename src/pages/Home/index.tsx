import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserSavedPasswords } from "../../redux/user/UserActions";
import { getLoggedUserSelector } from "../../redux/user/UserSelector";

import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import DefaultPageContent from "../../components/DefaultPageContent";
import { IUser } from "../../interfaces/User";
import { Header, HomeContainer, CardContainer } from "./Home.style";

import PasswordCard from "../../components/PasswordCard";
import { FiPlus } from "react-icons/fi";

export default function Home() {

    const dispatch = useDispatch();
    const userInfo: IUser = useSelector(getLoggedUserSelector);

    useEffect(() => {
        dispatch(loadUserSavedPasswords({ userId: userInfo.id }));
    }, [userInfo]);

    const handleDetails = useCallback((id: number) => {
        console.log(id);
    }, []);

    const handleDelete = useCallback((id: number) => {
        console.log(id);
    }, []);

    return(
        <DefaultPageContent>
            <HomeContainer>
                <Header>
                    <span>
                        <FaUser/>
                    </span>
                    <h3>Olá {userInfo.nickname}, seja bem vindo a sua central de senhas!</h3>
                    <h5>Abaixo você encontrará todas as suas senhas salvas.</h5>
                </Header>
                <CardContainer>
                    <Link to="/password/new" className="new">
                        <FiPlus color="#fff" size={25} />
                        Novo chamado
                    </Link>  
                    <div>
                        <PasswordCard id={ 1 } name="Nubank" description="Senha para acesso do aplicativo" detailsFunction={handleDetails} deleteFunction={handleDelete}/>
                        <PasswordCard id={ 1 } name="Nubank" description="Senha para acesso do aplicativo" detailsFunction={handleDetails} deleteFunction={handleDelete}/>
                        <PasswordCard id={ 1 } name="Nubank" description="Senha para acesso do aplicativo" detailsFunction={handleDetails} deleteFunction={handleDelete}/>
                        <PasswordCard id={ 1 } name="Nubank" description="Senha para acesso do aplicativo" detailsFunction={handleDetails} deleteFunction={handleDelete}/>
                        <PasswordCard id={ 1 } name="Nubank" description="Senha para acesso do aplicativo" detailsFunction={handleDetails} deleteFunction={handleDelete}/>
                        <PasswordCard id={ 1 } name="Nubank" description="Senha para acesso do aplicativo" detailsFunction={handleDetails} deleteFunction={handleDelete}/>
                    </div>
                </CardContainer>
            </HomeContainer>
        </DefaultPageContent>
    )
}