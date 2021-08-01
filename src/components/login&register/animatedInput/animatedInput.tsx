import React, { useRef, useState } from "react";
import "./animatedInput.sass";
function AnimatedInput({
  options,
}: {
  options: {
    name: string;
    setValue?: any;
    pattern?: any
    ref?:any
    notErr?: boolean
    password?: boolean
  };
}) {
  const { name, setValue, pattern, ref, notErr, password } = options;
  const labelRef: any = useRef();
  const [error, setError] = useState<any>(null);
  const onChange = (e: any) => {
    labelRef.current.classList.add("active");
    if(setValue)setValue(e.target.value);
    if (error) verificate(e);
  };
  const verificate = (e: any) => {
    const length = e.target.value.length;
    if (length === 0) labelRef.current.classList.remove("active");
    setError("");
    labelRef.current.classList.remove("errorColor");
    if (length < 5) {
      labelRef.current.classList.add("errorColor");
      if(!notErr)
      setError(`${name} debe tener al menos 5 carácteres`)
      return;
    }
    if (pattern) {
      if (!pattern.test(String(e.target.value).toLowerCase())) {
        labelRef.current.classList.add("errorColor");
        setError(`Ingresa un ${name} válido`)
        return;
      }
    }
  };
  return (
    <div className="animatedInput">
      <label
        htmlFor={name}
        ref={labelRef}
      >
        {name}
      </label>
      <input
        id={name}
        onChange={onChange}
        minLength={5}
        ref={ref}
        type={`${password ? "password" : "text"}`}
        className={error ? "errorInput" : ""}
        onFocus={() => {
          labelRef.current.classList.add("active");
        }}
        onBlur={verificate}
      />
      <p
        className="text-danger m-0 text-center flex"
        style={{ minHeight: "24px" }}
      >
        {error}
      </p>
    </div>
  );
}
export default AnimatedInput;
