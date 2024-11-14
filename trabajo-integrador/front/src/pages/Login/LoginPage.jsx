import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useAuth } from "./components/AuthProvider";

import "./LoginPage.css";
import { Login } from "../../service/auth/authSerivice";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handlOnClick = () => {
    navigate('/register'); 
  }

  const defaultValues = {
        inputUsernameValue: '',
        inputPasswordValue: ''
      };
    
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({ defaultValues });

      const OnSubmit = async ({inputUsernameValue, inputPasswordValue}) => {
        const response = await Login(inputUsernameValue, inputPasswordValue);
        if(response){
          login();
          navigate('/');
        }
      };



  return (
    <div className="login-content">
      <div className="card-login">
        <form onSubmit={handleSubmit(OnSubmit)}>
            <div className="login-fields">
              <label>Usuario</label>
              <div className='container-input-error'>
              <input
                {...register('inputUsernameValue', {
                  required: 'El campo Usuario es requerido'
                })}
                id='inputUsername'
                placeholder='Ingrese un usuario'
              />
              <p className='p-error'>{errors.inputUsernameValue?.message}</p>
            </div>
              <label>Contraseña</label>
              <div className='container-input-error'>
              <input
                {...register('inputPasswordValue', {
                  required: 'El campo contraseña es requerido'
                })}
                id='inputPassword'
                placeholder='Ingrese una contraseña'
                type='password'
              />
              <p className='p-error'>{errors.inputPasswordValue?.message}</p>
            </div>
            </div>
            <div className="p-login">
            <p onClick={handlOnClick}>Registrarse</p>
          </div>
            <div className="login-button">
              <button type="submit">Iniciar Sesión</button>
            </div>
          </form>
      </div>
    </div>
  );
};