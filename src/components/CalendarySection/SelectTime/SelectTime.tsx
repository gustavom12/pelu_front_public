import React,{ useContext } from 'react';
import ThemeContext from '../../../context/CalendaryContext';

const SelectTime = ()=>{
  const availableTimes = ["10:30","11:00","11:30"]
  const {selectedDay} = useContext<any>(ThemeContext)

  return(
    <div className="SelectTime column">
      <h6 className="mb-4" style={{fontSize:"18px", fontWeight:600}}>
      {
        selectedDay.format("dddd") === "Monday" ? "Lunes" :
        selectedDay.format("dddd") === "Tuesday" ? "Martes" :
        selectedDay.format("dddd") === "Wednesday" ? "Miercoles" :
        selectedDay.format("dddd") === "Thursday" ? "Jueves" :
        selectedDay.format("dddd") === "Friday" ? "Viernes" :
        selectedDay.format("dddd") === "Saturday" ? "Sábado" :
        selectedDay.format("dddd") === "Sunday" ? "Domingo" :
        ""
      }
      {" "}
      {selectedDay.format("DD")}
      {" De "}
      {
          selectedDay.format("MMMM") === "January" ? "Enero" :
          selectedDay.format("MMMM") === "February" ? "Febrero" :
          selectedDay.format("MMMM") === "March" ? "Marzo" :
          selectedDay.format("MMMM") === "April" ? "Abril" :
          selectedDay.format("MMMM") === "May" ? "Mayo" :
          selectedDay.format("MMMM") === "June" ? "Junio" :
          selectedDay.format("MMMM") === "July" ? "Julio" :
          selectedDay.format("MMMM") === "August" ? "Agosto" :
          selectedDay.format("MMMM") === "September" ? "Septiembre" :
          selectedDay.format("MMMM") === "October" ? "Octubre" :
          selectedDay.format("MMMM") === "November" ? "Noviembre" :
          selectedDay.format("MMMM") === "December" ? "Diciembre" : ""
        }
      </h6>
      <div className="scrollable" id="scrollable">
        {availableTimes.map((time, i)=>
        <div className="fw-bold flex time text-primary" key={i}>
          {time}
        </div>
        )}
      </div>
    </div>
  )
}
export default SelectTime
