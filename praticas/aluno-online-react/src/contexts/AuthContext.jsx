import { createContext, useState } from "react";
import { loginApi } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [logado, setLogado] = useState(false);

  const login = async (email, senha) => {
    const dados = await loginApi(email, senha);

    localStorage.setItem("token", dados.token);

    setUsuario(dados.user);
    setLogado(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUsuario(null);
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;