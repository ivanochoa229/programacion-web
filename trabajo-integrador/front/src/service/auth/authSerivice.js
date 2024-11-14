const API_BASE = `/api/`;

export const Login = async (username, password) => {
    try {
        const login = await fetch(`${API_BASE}login`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json', 
              },
              body: JSON.stringify({ username, password })
          });
          if (!login.ok) {
            throw new Error('Response error');
          }
          const data = await login.json();
          return data;
    } catch (err) {
        console.error('Auth Error:', err);
        throw err;
    }
}

export const Register = async (username, password) => {
    try {
        const login = await fetch(`${API_BASE}register`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json', 
              },
              body: JSON.stringify({ username, password })
          });
          if (!login.ok) {
            throw new Error('Response error');
          }
          const data = await login.json();
          return data;
    } catch (err) {
        console.error('Auth Error:', err);
        throw err;
    }
}