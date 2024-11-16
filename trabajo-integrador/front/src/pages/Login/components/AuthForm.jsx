import { useForm } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
export const AuthForm = ({ title, onSubmit, buttonText, defaultValues}) => {
  const { register, handleSubmit, formState } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <h2>{title}</h2>
        </div>
      <div className="login-fields">
        <label>Usuario</label>
        <div className="container-input-error">
          <input
            {...register('inputUsernameValue', {
              required: 'El campo Usuario es requerido',
            })}
            id="inputUsername"
            placeholder="Ingrese un usuario"
          />
          <p className="p-error">{formState.errors.inputUsernameValue?.message}</p>
        </div>
        
        <label>Contraseña</label>
        <div className="container-input-error">
          <input
            {...register('inputPasswordValue', {
              required: 'El campo contraseña es requerido',
            })}
            id="inputPassword"
            placeholder="Ingrese una contraseña"
            type="password"
          />
          <p className="p-error">{formState.errors.inputPasswordValue?.message}</p>
        </div>
      </div>
      <div className="login-button">
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
};