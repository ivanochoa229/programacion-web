import { useForm } from "react-hook-form";
import PropTypes from "prop-types";


export const AuthForm = ({
  title,
  onSubmit,
  buttonText,
  defaultValues,
  validationRules,
}) => {
  const { register, handleSubmit, formState } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2 className="title-form">{title}</h2>
      </div>
      <div className="login-fields">
        <label>Usuario</label>
        <div className="container-input-error">
          <input
            {...register("inputUsernameValue", validationRules.username)}
            id="inputUsername"
            placeholder="Ingrese un usuario"
          />
          <p className="p-error">
            {formState.errors.inputUsernameValue?.message}
          </p>
        </div>

        <label>Contraseña</label>
        <div className="container-input-error">
          <input
            {...register("inputPasswordValue", validationRules.password)}
            id="inputPassword"
            placeholder="Ingrese una contraseña"
            type="password"
          />
          <p className="p-error">
            {formState.errors.inputPasswordValue?.message}
          </p>
        </div>
      </div>
      <div className="login-button">
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string,
  defaultValues: PropTypes.object,
  onSubmit: PropTypes.func,
  buttonText: PropTypes.string,
  validationRules: PropTypes.shape({
    username: PropTypes.object.isRequired,
    password: PropTypes.object.isRequired,
  }).isRequired,
};
