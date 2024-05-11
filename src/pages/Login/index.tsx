import DefaultPageContent from '../../components/DefaultPageContent';
import { LoginCard } from './Login.style';

const Login = () => {
  return (
    <DefaultPageContent>
      <LoginCard>
        <span>
          <h1>Bem Vindo de Volta!</h1>
          <small>Guarde e acesse todas as suas senhas em apenas um lugar, de forma rápida, prática e segura!</small>
        </span>

        <form>
          <span>
            <input type="text" placeholder='Nome de Usuário' autoFocus/>
            <input type="password" placeholder='Senha'/>
            <a href="#RecuperarSenha">Esqueceu sua senha?</a>

            <input type="submit" value="Entrar" />
          </span>
        </form>

        <h6>
          <p>Ainda não possui uma conta? <a href='#Registre-se'>Registre-se</a></p>
        </h6>

      </LoginCard>
    </DefaultPageContent>
  );
};

export default Login;
