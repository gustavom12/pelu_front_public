import { createContext, useEffect, useState } from 'react';
import { decrypt } from '../helpers&hooks/encrypt';
import { post } from '../helpers&hooks/fetchHelper';
import { url, } from '../helpers&hooks/useFetch';

const userContext = createContext({
  user: null,
});
const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const userEncrypted = localStorage.getItem("_us")
    if (!userEncrypted) {
      setLoading(false)
      return;
    }
    if (!decrypt(userEncrypted)) {
      setLoading(false)
      return;
    }
    const userLocalstorage = JSON.parse(decrypt(userEncrypted))
    const registerLoginToken = process.env.REACT_APP_register_token
    const body = {
      email: userLocalstorage.email,
      password: userLocalstorage.password,
      token: registerLoginToken
    }
    const Async = async () => {
      const data = await post(`${url}usuarios_login.php`, { body })
      if (data.status === "ok") setUser(data.result)
      else {
        setUser(null)
        setError(data)
      }
      setLoading(false)
    }
    Async()
  }, [])

  const value = { user, error, loading };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export { UserProvider };
export default userContext
