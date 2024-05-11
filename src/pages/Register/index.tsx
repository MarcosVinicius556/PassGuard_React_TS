import DefaultPageContent from '../../components/DefaultPageContent';
import { RegisterCard } from './Register.style';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <DefaultPageContent>
      <RegisterCard>
        <span>
          <h1>Bem Vindo ao time!</h1>
          <small>Aqui você poderá guardar e acessar todas as suas senhas de forma rápida, fácil e segura!</small>
        </span>

        <form>
          <span>
            <input type="text" placeholder='Nome de Usuário' autoFocus/>
            <input type="text" placeholder='Apelido'/>
            <hr />
            <input type="password" placeholder='Senha'/>
            <input type="password" placeholder='Repita a sua senha'/>

            <input type="submit" value="Registrar-se" />
          </span>
        </form>

        <h6>
          <p>Já possui uma conta? <Link to='/'>Faça Login</Link></p>
        </h6>

      </RegisterCard>
    </DefaultPageContent>
  );
};

export default Register;
