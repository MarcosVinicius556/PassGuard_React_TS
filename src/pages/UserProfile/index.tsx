import { Link } from "react-router-dom";
import DefaultPageContent from "../../components/DefaultPageContent";
import { UserProfileContainer } from "./UserProfile.style";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { RegisterFormSchema } from "../../utils/ValidationSchemas";

import FormErrorMessage from "../../components/FormErrorMessage";

import { toast } from "react-toastify";

interface IUserUpdate {
    username: string;
    nickname: string;
    password: string;
    re_password: string;
}

export function UserProfile() {

    const{ register, handleSubmit, formState: { errors }} = useForm<IUserUpdate>({ resolver: zodResolver(RegisterFormSchema) });

    const handleUpdate = (data: IUserUpdate) => {
        if(data.password !== data.re_password) {
            toast.error("As senhas digitadas estão diferentes!");
            return;
        }

        toast.success("Registrado com sucesso!");
    }

    return (
        <DefaultPageContent>
            <UserProfileContainer>
                <h1>Configurações do usuário</h1>
                <hr />
                <form onSubmit={handleSubmit(handleUpdate)}>
                    <span>
                        <input type="text" placeholder="Nome de usuário" {...register('username', { required: true })} autoFocus/>
                        <FormErrorMessage message={errors.username?.message}/>
                        <input type="text" placeholder="Apelido" {...register('nickname', { required: true })}/>
                        <FormErrorMessage message={errors.nickname?.message}/>
                        <input type="text" placeholder="Senha" {...register('password', { required: true })}/>
                        <FormErrorMessage message={errors.password?.message}/>
                        <input type="text" placeholder="Repita a sua senha" {...register('re_password', { required: true })}/>
                        <FormErrorMessage message={errors.re_password?.message}/>
                        <input type="text" value={"Criado em 00/00/0000"}/>
                    </span>

                    <input type="submit" value="Salvar" />
                    <Link to="/home">Cancelar</Link>
                </form>
            </UserProfileContainer>
        </DefaultPageContent>
    )
}