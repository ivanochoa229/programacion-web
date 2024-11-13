import { useNavigate } from "react-router-dom";
import { useAuth } from "./components/AuthProvider";
import "./LoginPage.css";

export const LoginPage = () => {
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    login(); 
    navigate('/'); 
  };

  const handlOnClick = () => {
    navigate('/register'); 
  }

  return (
    <div className="login-content">
      <div className="card-login">
        <form onSubmit={handleOnSubmit}>
          <div className="login-fields">
            <label>Usuario</label>
            <input type="text" placeholder="Ingrese su usuario" />
            <label>Contraseña</label>
            <input type="password" placeholder="Ingrese su contraseña" />
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