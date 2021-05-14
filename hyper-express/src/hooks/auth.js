import { createContext, useContext, useCallback } from 'react';
import usePersisted from './usePersisted';
import { api } from 'api/api';

const UserContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = usePersisted('user', {});

  const signIn = useCallback(
    async (login) => {
      const signIndata = {
        email: login.email,
        senha: login.senha,
      };

      const { data } = await api.post('usuarios/login', signIndata);

      if (data) {
        setUser({
          id: data.id,
          name: data.nome,
          avatar: data.avatar,

          email: data.email,
          picture: data.picture,
        });
      }
    },
    [setUser],
  );

  const singOut = useCallback(() => {
    localStorage.removeItem('@hyper:user');
    window.location.reload();
  }, []);

  return (
    <UserContext.Provider value={{ signIn, singOut, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useAuth = () => useContext(UserContext);

export { AuthProvider, useAuth };
