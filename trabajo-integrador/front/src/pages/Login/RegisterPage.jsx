import { useForm } from 'react-hook-form';
import { Register } from '../../service/auth/authSerivice';

export const RegisterPage = () => {

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
        const response = await Register(inputUsernameValue, inputPasswordValue);
        console.log(response);
      };

  return (
    <>
      <div className="login-content">
        <div className="card-login">
          <form onSubmit={handleSubmit(OnSubmit)}>
            <div className="login-fields">
              <label>Usuario</label>
              <div className='container-input-error'>
              <input
                {...register('inputUsernameValue', {
                  required: 'El campo Usuario es requerido',
                  minLength:{
                    value: 4,
                    message: `El usuario no puede ser menor a 4 caractéres`,
                  },
                  maxLength: {
                    value: 60,
                    message: `El usuario no puede ser mayor a 60 caractéres`,
                  },
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
                  required: 'El campo contraseña es requerido',
                  minLength:{
                    value:8,
                    message: `La contraseña debe tener al menos 8 caracteres`
                  },
                  maxLength: {
                    value: 60,
                    message: `La contraseña no puede ser mayor a 60 caractéres`,
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,60}/,
                    message: 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial'
                  }
                })}
                id='inputPassword'
                placeholder='Ingrese una contraseña'
                type='password'
              />
              <p className='p-error'>{errors.inputPasswordValue?.message}</p>
            </div>
            </div>
            <div className="login-button">
              <button type="submit">Crear Usuario</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
