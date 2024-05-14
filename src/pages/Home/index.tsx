import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUserSavedPasswords } from "../../redux/user/UserActions";
import { getLoggedUserSelector } from "../../redux/user/UserSelector";

import { IUser } from "../../interfaces/User";
import DefaultPageContent from "../../components/DefaultPageContent";
import { Header, HomeContainer, TableContainer } from "./Home.style";
import { FaUser } from "react-icons/fa";
import { Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

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
                    <Table striped hover onClick={() => alert('Abrir painel de detalhes da senha')} >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>NOME</th>
                                <th>DESCRIÇÃO</th>
                                <th>AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nubank</td>
                                <td>Senha para acesso do APP</td>
                                <td>
                                    <span>
                                        <Link to={`/password/edit/${"password.id"}`}><BiEdit size={25} color="green" /></Link> | <Link to={`/password/delete/${"password.id"}`}><MdDelete size={25} color="red"/></Link>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </TableContainer>
            </HomeContainer>
        </DefaultPageContent>
    )
}