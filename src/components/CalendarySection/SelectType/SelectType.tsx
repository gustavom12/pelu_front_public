import React, { useState } from 'react';
const SelectType = () => {
  const [type, setType] = useState("corte");
  return (
    <div className="SelectType column">
      <h6 className="m-0 fw-bold">Selecciona una opción</h6>
      <div
        className={`mt-2 type ${type === "corte" && "active"}`}
        onClick={()=>setType("corte")}
        >
        <h2 className="mb-0">nombrenombre</h2>
        <div className="d-flex justify-content-between">
          <h5 className="d-flex fw-bold my-2">
            <i className="fas fa-clock my-auto"></i>
            <span className="mx-2">20 min </span>
          </h5>
          <h5 className="d-flex align-items-center fw-bold my-2">
            <i className="fas fa-money-bill-wave"></i>
            <span className="my-auto mx-1">$600 </span>
          </h5>
        </div>
      </div>
      <div className={`mt-4 type ${type === "barba" && "active"}`}>
        <h2 className="mb-0">nombrenombre</h2>
        <div className="d-flex justify-content-between">
          <h5 className="d-flex fw-bold my-2">
            <i className="fas fa-clock my-auto"></i>
            <span className="mx-2">15 min </span>
          </h5>
          <h5 className="d-flex align-items-center fw-bold my-2">
            <i className="fas fa-money-bill-wave"></i>
            <span className="my-auto mx-1">$500 </span>
          </h5>
        </div>
      </div>
      <div className={`mt-4 type ${type === "pelo&barba" && "active"}`}>
        <h2 className="mb-0">nombrenombre</h2>
        <div className="d-flex justify-content-between">
          <h5 className="d-flex fw-bold my-2">
            <i className="fas fa-clock my-auto"></i>
            <span className="mx-2">40 min </span>
          </h5>
          <h5 className="d-flex align-items-center fw-bold my-2">
            <i className="fas fa-money-bill-wave"></i>
            <span className="my-auto mx-1">$1000 </span>
          </h5>
        </div>
      </div>
    </div>
  )
}
export default SelectType
