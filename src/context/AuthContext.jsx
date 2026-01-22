import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔁 Restore auth on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    const contact = localStorage.getItem("contact");

    if (token && contact) {
      setUser({ token, contact });
    }

    setLoading(false);
  }, []);

  const login = (token, contact) => {
    localStorage.setItem("token", token);
    localStorage.setItem("contact", contact);

    setUser({ token, contact });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("contact");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth: !!user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
