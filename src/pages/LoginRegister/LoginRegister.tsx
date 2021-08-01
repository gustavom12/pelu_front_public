import React,{} from 'react';
import './LoginRegister.sass'
import image from "../../assets/images/loginIMG.png"
import LoginRegisterForm from '../../components/login&register/login&register';
const LoginRegister = ({loginOrRegister}:{loginOrRegister: string})=>{
  return(
    <section className="LoginRegister flex w-100" style={{backgroundImage: `url(${image})`}}>
      <LoginRegisterForm RegisterOrLogging={loginOrRegister === "login" ? "Iniciar Sesión" : "Registrarse"} />
    </section>
  )
}
export default LoginRegister
