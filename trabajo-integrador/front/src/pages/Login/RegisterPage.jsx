import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../Login/components/AuthForm';  // Componente reutilizable
import { Register } from '../../service/auth/authSerivice';

export const RegisterPage = () => {
  const defaultValues = {
    inputUsernameValue: '',
    inputPasswordValue: '',
  };
  const navigate = useNavigate();

  const onSubmit = async ({ inputUsernameValue, inputPasswordValue }) => {
    const response = await Register(inputUsernameValue, inputPasswordValue);
    if (response.success) {
      navigate('/');
    } else {
      console.log('Error en el registro:', response.message);
    }
  };

  return (
    <div className="login-content">
      <div className="card-login">
        <AuthForm
          title={'Crear Nuevo Usuario'}
          onSubmit={onSubmit}
          buttonText="Crear Usuario"
          defaultValues={defaultValues}
        />
      </div>
    </div>
  );
};