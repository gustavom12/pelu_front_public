import { createContext, useEffect } from 'react';
import { decrypt } from '../helpers&hooks/encrypt';
import { url, useFetchPost } from '../helpers&hooks/useFetch';

const userContext = createContext({
  user: null,
});
const UserProvider = ({ children }: { children: any }) => {
  const { data, error, Post } = useFetchPost()
  useEffect(() => {
    const userEncrypted = localStorage.getItem("_us")
    if (!userEncrypted) return;
    if (!decrypt(userEncrypted)) return;
    const userLocalstorage = JSON.parse(decrypt(userEncrypted))
    console.log(userLocalstorage)
    const registerLoginToken = process.env.REACT_APP_register_token
    const body = {
      email: userLocalstorage.email,
      password: userLocalstorage.password,
      token: registerLoginToken
    }
    const Async = async () =>{
      await Post({ url: `${url}usuarios_login.php`, body })}
    Async()
  }, [Post])

  const value = { user: data?.result, error };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export { UserProvider };
export default userContext
