const API_BASE = `/api/`;

export const Login = async (username, password) => {
  try {
    
    const login = await fetch(`${API_BASE}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (!login.ok) {
      throw new Error("Response error");
    }
    const data = await login.json();
    if (data.jwt) {
      sessionStorage.setItem("token", data.jwt);
    }

    return {
      success: true,
      message: "Login exitoso",
      data, 
    };

  } catch (err) {
    console.error("Auth Error:", err);
    return {
      success: false,
      message: err.message || "Hubo un problema con la autenticación",
    };
  }
};

export const Register = async (username, password) => {
  try {
    const register = await fetch(`${API_BASE}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (!register.ok) {
      throw new Error("Response error");
    }
    const data = await register.json();
    if (data.jwt) {
      sessionStorage.setItem("token", data.jwt);
    }
    return {
      success: true,
      message: "Registro exitoso",
      data, 
    };
  } catch (err) {
    console.error("Auth Error:", err);
    return {
      success: false,
      message: err.message || "Hubo un problema al registrar el usuario",
    };
  }
};
