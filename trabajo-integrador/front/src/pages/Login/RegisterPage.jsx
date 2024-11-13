import { useForm } from 'react-hook-form';

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

      const OnSubmit = (data) => {
        // Aquí puedes gestionar la lógica de envío del formulario
        console.log(data);
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
                  maxLength: {
                    value: 60,
                    message: `La contraseña no puede ser mayor a 60 caractéres`,
                  },
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
