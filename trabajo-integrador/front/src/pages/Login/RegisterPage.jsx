import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../Login/components/AuthForm';  
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
      window.alert(`El usuario ${inputUsernameValue} fue creado exitosamente. Bienvenido!` );
      navigate('/');  
    } else {
      window.alert(`El usuario ${inputUsernameValue} ya se encuentra registrado. Intente con otro por favor.`); 
    }
  }

  const validationRules = {
    username: {
      required: 'El campo Usuario es requerido',
      minLength: {
        value: 4,
        message: 'El usuario debe tener al menos 4 caracteres',
      },
    },
    password: {
      required: 'El campo contraseña es requerido',
      minLength: {
        value: 8,
        message: 'La contraseña debe tener al menos 8 caracteres',
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message:
          'La contraseña debe incluir al menos una mayúscula, una minúscula, un número y un carácter especial (@$!%*?&)',
      },
    },
  };

  return (
    <div className="login-content">
      <div className="card-login">
        <AuthForm
          title={'Registrarse'}
          onSubmit={onSubmit}
          buttonText="Crear Usuario"
          defaultValues={defaultValues}
          validationRules={validationRules}
        />
      </div>
    </div>
  );
};