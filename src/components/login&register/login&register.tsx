import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { encrypt } from "../../helpers&hooks/encrypt";
import { post } from "../../helpers&hooks/fetchHelper";
import AnimatedInput from "./animatedInput/animatedInput";
import "./login&register.sass";
function LoginRegisterForm({
  RegisterOrLogging = "Iniciar Sesión"
}:
  {
    RegisterOrLogging: any
  }) {
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [Error, setError] = useState<string | null>(null);
  const password2Ref = useRef<any>()
  const url = process.env.REACT_APP_URL_BACKEND
  const registerEndPoint = "usuarios_registrar.php"
  const loginEndPoint = "usuarios_login.php"
  const registerLoginToken = process.env.REACT_APP_register_token
  useEffect(() => {
    RegisterOrLogging
      ? document.querySelector("body")?.classList.add("notScrollBar")
      : document.querySelector("body")?.classList.remove("notScrollBar");
  }, [RegisterOrLogging]);
  const onSubmit = async (e: any) => {
    e.preventDefault()
    setError(null)
    if (RegisterOrLogging === "Registrarse") {
      //REGISTER
      if (password !== password2Ref.current.value) {
        setError("Las contraseñas no coinciden")
        return;
      }
      const user = {
        token: registerLoginToken,
        email,
        password,
        telefono,
        nombre
      }
      const res = await post(`${url}${registerEndPoint}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: user
      })
      if (res.status === "error") {
        setError(res.result.error_msg)
        console.log(res)
      } else {
        localStorage.setItem("_us", encrypt(JSON.stringify({
          id: res.result.UsuarioId,
          password,
          email,
          token: res.result.UsuarioId
        })))
        window.location.href = "/"
      }
    } else {
      //LOGIN
      const user = {
        email,
        password,
        token: registerLoginToken
      }
      const res = await post(`${url}${loginEndPoint}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: user
      })
      if (res.status === "error") {
        setError(res.result.error_msg)
      } else {
        localStorage.setItem("_us", encrypt(JSON.stringify({
          id: res.result.UsuarioId,
          password,
          email,
          token: res.result.UsuarioId
        })))
        window.location.href = "/"
      }
    }
  };
  return (
    <>
      <div className="formModal flex w-100">
        <form onSubmit={onSubmit}>
          <div className="d-flex justify-content-around changeLogin">
            <NavLink
              to="/register"
              activeClassName="active"
              className={`
                flex underlineHover a
              `}
            >
              <span className={`${RegisterOrLogging === "Registrarse" && "active"}`}>Registrarse</span>
            </NavLink>
            <NavLink
              to="/login"
              activeClassName="active"
              className={`
                flex underlineHover a
                `}
            >
              <span className={`${RegisterOrLogging === "Iniciar Sesión" && "active"}`}>Iniciar Sesión</span>
            </NavLink>
          </div>
          <h3 className="fw-bold text-center fs-1 mb-2 mt-2 text-main">
            {RegisterOrLogging}
          </h3>
          <div
            className="hr mx-auto bg-main mb-2"
            style={{ height: "4px", width: "12%" }}
          ></div>
          <AnimatedInput
            options={{
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              setValue: setEmail,
              name: "Email",
            }}
          />
          <AnimatedInput
            options={{
              setValue: setPassword,
              name: "Contraseña",
              password: true
            }}
          />
          {
            RegisterOrLogging === "Registrarse" &&
            <>
              <AnimatedInput
                options={{
                  name: "Confirma tu Contraseña",
                  ref: password2Ref,
                  password: true,
                  notErr: true
                }}
              />
              <AnimatedInput
                options={{
                  setValue: setNombre,
                  name: "Nombre"
                }}
              />
              <AnimatedInput
                options={{
                  setValue: setTelefono,
                  name: "Teléfono (opcional)",
                  pattern: /^[0-9]*$/
                }}
              />
            </>
          }
          {Error &&
            <h5 className="text-center fw-bold text-danger">{Error}</h5>
          }
          <button
            type="submit"
            className="btn-darkmain text-serif2 fw-bold mx-auto mt-3"
          >
            {RegisterOrLogging === "Registrarse" ? "Registrarse" : "Iniciar sesión"}
          </button>
        </form>
      </div>
    </>
  );
}
export default LoginRegisterForm;
