import React, { useState } from "react";
import { TOKEN_POST } from "./api";
import { useNavigate } from "react-router-dom";

export const userContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function userLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, password });
      const response = await fetch(url, options);

      if (!response.ok) throw new Error("Error: Usuário inválido");

      const { token, admin } = await response.json();
      setData(admin);
      window.localStorage.setItem("TOKEN", token);
      window.localStorage.setItem("ADMIN", JSON.stringify(admin));
      setLogin(true);
      navigate("/main");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    setData(null);
    setError(null);
    setLoading(null);
    setLoading(false);
    window.localStorage.removeItem("TOKEN");
    navigate("/");
  }

  return (
    <userContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </userContext.Provider>
  );
};
