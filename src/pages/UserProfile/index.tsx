import { Link } from "react-router-dom";
import DefaultPageContent from "../../components/DefaultPageContent";
import { UserProfileContainer } from "./UserProfile.style";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { RegisterFormSchema } from "../../utils/ValidationSchemas";

import FormErrorMessage from "../../components/FormErrorMessage";

import { getLoggedUserSelector } from "../../redux/user/UserSelector";
import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";

import { toast } from "react-toastify";

import { updateUserData } from "../../redux/user/UserActions";

interface IUserUpdate {
    username: string;
    nickname: string;
    password: string;
    re_password: string;
}

export function UserProfile() {

    const{ register, handleSubmit, formState: { errors }} = useForm<IUserUpdate>({ resolver: zodResolver(RegisterFormSchema) });

    const[alterarSenha, setAlterarSenha] = useState<boolean>(false);

    const dispatch = useDispatch();
    const loggedUser = useSelector(getLoggedUserSelector);

    const handleUpdate = (data: IUserUpdate) => {
        if(data.password !== data.re_password) {
            toast.error("As senhas digitadas estão diferentes!");
            return;
        }
        let userToUpdate = {
            username: data.username,
            nickname: data.nickname,
            alterarSenha: alterarSenha,
            password: data.password,
        }

        dispatch(updateUserData(userToUpdate))


    }

    return (
        <DefaultPageContent>
            <UserProfileContainer>
                <h1>Configurações do usuário</h1>
                <hr />
                <form onSubmit={handleSubmit(handleUpdate)}>
                    <span>
                        <input type="text" placeholder="Nome de usuário" value={loggedUser.username} {...register('username', { required: true })} autoFocus/>
                        <FormErrorMessage message={errors.username?.message}/>
                        <input type="text" placeholder="Apelido" value={loggedUser.nickname} {...register('nickname', { required: true })}/>
                        <FormErrorMessage message={errors.nickname?.message}/>
                        <span>
                            <input type="checkbox" onChange={() => {setAlterarSenha(!alterarSenha)}}/>
                            <label>Alterar a senha?</label>
                        </span>
                        {alterarSenha &&
                            <>
                                <input type="text" placeholder="Senha" {...register('password', { required: true })}/>
                                <FormErrorMessage message={errors.password?.message}/>
                                <input type="text" placeholder="Repita a sua senha" {...register('re_password', { required: true })}/>
                                <FormErrorMessage message={errors.re_password?.message}/>
                            </>
                        }
                        
                    </span>

                    <input type="submit" value="Salvar" />
                    <Link to="/home">Cancelar</Link>
                </form>
            </UserProfileContainer>
        </DefaultPageContent>
    )
}