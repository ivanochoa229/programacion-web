import { useNavigate } from 'react-router-dom';
import { useAuth } from './components/AuthProvider';
import { AuthForm } from '../Login/components/AuthForm'; 
import { Login } from '../../service/auth/authSerivice';
import './LoginPage.css';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const defaultValues = {
    inputUsernameValue: '',
    inputPasswordValue: '',
  };

  const onSubmit = async ({ inputUsernameValue, inputPasswordValue }) => {
    window.alert(inputUsernameValue + inputPasswordValue)
    const response = await Login(inputUsernameValue, inputPasswordValue);
    if (response.success) {
      login(); 
      navigate('/');  
    } else {
      window.alert('Usuario y/o contraseña incorrectos'); 
    }
  };
  
  const validationRules = {
    username: {
      required: 'El campo Usuario es requerido',
    },
    password: {
      required: 'El campo contraseña es requerido',
    },
  };


  return (
    <div className="login-content">
      <div className="card-login">
        <AuthForm
        title={'Iniciar Sesión'}
          onSubmit={onSubmit}
          buttonText="Iniciar Sesión"
          defaultValues={defaultValues}
          validationRules={validationRules}
        />
        <div className="p-login">
          <p onClick={() => navigate('/register')}>Registrarse</p>
        </div>
      </div>
    </div>
  );
};