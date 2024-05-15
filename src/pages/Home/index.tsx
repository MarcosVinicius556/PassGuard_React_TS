import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserSavedPasswords } from "../../redux/user/UserActions";
import { getLoggedUserSelector } from "../../redux/user/UserSelector";

import { FaUser } from "react-icons/fa";
import { FiEdit2, FiPlus, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import DefaultPageContent from "../../components/DefaultPageContent";
import { IUser } from "../../interfaces/User";
import { Header, HomeContainer, TableContainer } from "./Home.style";

export default function Home() {

    const dispatch = useDispatch();
    const userInfo: IUser = useSelector(getLoggedUserSelector);

    useEffect(() => {
        dispatch(loadUserSavedPasswords({ userId: userInfo.id }));
    }, [userInfo]);

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
                <TableContainer>
                    <Link to="/password/new" className="new">
                        <FiPlus color="#fff" size={25} />
                        Novo chamado
                    </Link>  
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">NOME</th>
                                <th scope="col">DESCRIÇÃO</th>
                                <th scope="col">AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="ID">1</td>
                                <td data-label="Nome">Nubank</td>
                                <td data-label="Descrição">Senha para acesso do APP</td>
                                <td data-label="#">
                                    <button className="action" style={{ backgroundColor: '#3583f6' }}>
                                        <FiSearch color='#FFF' size={17}/>
                                    </button>
                                    <Link to={`/password/edit/colocar_id_aqui`} className="action" style={{ backgroundColor: '#f6a935' }}>
                                        <FiEdit2 color='#FFF' size={17}/>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </TableContainer>
            </HomeContainer>
        </DefaultPageContent>
    )
}