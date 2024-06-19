import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserSavedPasswords } from "../../redux/user/UserActions";
import { getLoggedUserSelector, getCredentialsSelector, getPageNumberSelector, getPageSizeSelector } from "../../redux/user/UserSelector";

import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import DefaultPageContent from "../../components/DefaultPageContent";
import { IUser } from "../../interfaces/User";
import { Header, HomeContainer, CardContainer, NextPreviousContainer } from "./Home.style";

import PasswordCard from "../../components/PasswordCard";
import { FiPlus } from "react-icons/fi";
import Swal from "sweetalert2";
import { ITokenDTO } from "../../interfaces/TokenDTO";
import { MdNavigateNext } from "react-icons/md";

export default function Home() {

    const dispatch = useDispatch();
    const userInfo: IUser = useSelector(getLoggedUserSelector);
    const credentials: ITokenDTO = useSelector(getCredentialsSelector);
    const pageNumber: number = useSelector(getPageNumberSelector);
    const pageSize: number = useSelector(getPageSizeSelector);

    useEffect(() => {
        loadUserPasswords(0);
    }, []);

    const loadUserPasswords = useCallback((page_number: number) => {
        dispatch(loadUserSavedPasswords({ userId: userInfo.id, token: credentials.token, page_number }));
    }, [])

    const handleDetails = useCallback((id: number) => {
        Swal.fire({
            title: '<h1>Detalhes<h1>',
            html: `<b></b>`,
            didOpen: () => {
                Swal.showLoading();
                let information = Swal.getPopup()?.querySelector("b")
                information!.textContent = `Aguarde, carregando informações!`;
            }
        });
    }, []);

    const handleDelete = useCallback((id: number) => {
        console.log(userInfo)
        console.log(id);
    }, []);

    const handleNext = useCallback(() => {
        loadUserPasswords(pageNumber + 1)
    }, [])

    const handlePrevious = useCallback(() => {
        loadUserPasswords(pageNumber - 1)
    }, [])

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
                        Registrar uma nova senha
                    </Link>  
                    <div>
                        {userInfo.saved_passwords && userInfo.saved_passwords.length > 0 
                        ? userInfo.saved_passwords.map((password) => (
                          <PasswordCard 
                            key={password.id} 
                            id={password.id}
                            name={password.name}
                            description={password.description}
                            detailsFunction={handleDetails}
                            deleteFunction={handleDelete} />
                        ))
                        : `Nenhuma senha encontrada!`}
                    </div>
                    <NextPreviousContainer>
                        <button onClick={() => handlePrevious()}>
                            Anterior <MdNavigateNext size={25}/> 
                        </button>
                        <strong>Número de Páginas: {pageSize}</strong>
                        <button onClick={() => handleNext()}>
                            Próximo <MdNavigateNext size={25}/>
                        </button>
                    </NextPreviousContainer>
                </CardContainer>
            </HomeContainer>
        </DefaultPageContent>
    )
}