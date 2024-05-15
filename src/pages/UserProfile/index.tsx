import { Link } from "react-router-dom";
import DefaultPageContent from "../../components/DefaultPageContent";
import { UserProfileContainer } from "./UserProfile.style";

export function UserProfile() {
    return (
        <DefaultPageContent>
            <UserProfileContainer>
                <h1>Configurações do usuário</h1>
                <hr />
                <form>
                    <span>
                        <input type="text" placeholder="Nome de usuário" autoFocus/>
                        <input type="text" placeholder="Apelido"/>
                        <input type="text" placeholder="Senha"/>
                        <input type="text" placeholder="Senha"/>
                        <input type="text" value={"Criado em 00/00/0000"}/>
                    </span>

                    <input type="submit" value="Salvar" />
                    <Link to="/home">Cancelar</Link>
                </form>
            </UserProfileContainer>
        </DefaultPageContent>
    )
}