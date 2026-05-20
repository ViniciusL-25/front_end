import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState({});
  const [logado, setLogado] = useState(false);

  function login(dados) {
    setUsuario(dados || { nome: "Usuário" });
    setLogado(true);
  }

  function logout() {
    setUsuario({});
    setLogado(false);
  }

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}