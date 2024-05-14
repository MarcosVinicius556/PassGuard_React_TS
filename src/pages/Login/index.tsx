import DefaultPageContent from '../../components/DefaultPageContent';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { LoginCard } from './Login.style';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginFormSchema } from '../../utils/ValidationSchemas';

import FormErrorMessage from '../../components/FormErrorMessage';
 
import { useSelector, useDispatch } from 'react-redux';
import { signInUser } from '../../redux/user/UserActions';

import { getLoggedSelector } from '../../redux/user/UserSelector';

import { useNavigate } from 'react-router-dom';

interface ILogin {
  username: string,
  password: string
}

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<ILogin>({ resolver: zodResolver(LoginFormSchema) })

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLogged: boolean = useSelector(getLoggedSelector);

  const handleLogin = (formData: ILogin) => {
    dispatch(signInUser(formData));
  }

  useEffect(() => {
    if(isLogged) {
      navigate('/home');
    }
  }, [isLogged])
 
  return (
    <DefaultPageContent>
      <LoginCard>
        <span>
          <h1>Bem Vindo de Volta!</h1>
          <small>Guarde e acesse todas as suas senhas em apenas um lugar, de forma rápida, prática e segura!</small>
        </span>

        <form onSubmit={handleSubmit(handleLogin)}>
          <span>
            <input 
              type="text" 
              placeholder='Nome de Usuário' 
              { ...register('username', { required: true }) }
              autoFocus/>
            {<FormErrorMessage message={errors.username?.message}/>}

            <input 
              type="password" 
              placeholder='Senha'
              { ...register('password', { required: true }) }/>
            {<FormErrorMessage message={errors.password?.message}/>}

            <a href="#RecuperarSenha">Esqueceu sua senha?</a>

            <input type="submit" value="Entrar" />
          </span>
        </form>

        <h6>
          <p>Ainda não possui uma conta? <Link to='/register'>Registre-se</Link></p>
        </h6>

      </LoginCard>
    </DefaultPageContent>
  );
};

export default Login;
