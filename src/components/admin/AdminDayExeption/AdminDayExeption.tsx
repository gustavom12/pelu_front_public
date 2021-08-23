import React, { useContext, useState } from 'react';
import ThemeContext from '../../../context/CalendaryContext';
import DayConfig from '../AdminConfig/DayConfig';
import './AdminDayExeption.sass'
const AdminDayExeption = () => {
  const { selectedDay } = useContext<any>(ThemeContext)
  const [dayConfig, setDayConfig] = useState({
    dia: "1",
    nombre: "Lunes",
    short: "Lun",
    turnos: [
      { inicio: "09:00", fin: "13:00" }
    ]
  });
  const addTurn = () => {
    setDayConfig({ ...dayConfig, turnos: [...dayConfig.turnos, { inicio: "14:00", fin: "18:00" }] })
  }
  const onValueChange = (value: string, _: any, turnIndex: number, isInicio: boolean) => {
    if (isInicio) dayConfig.turnos[turnIndex].inicio = value
    if (!isInicio) dayConfig.turnos[turnIndex].fin = value
    setDayConfig({ ...dayConfig })
  }
  const removeTurn = (_: any, indexTurno: number) => {
    dayConfig.turnos.splice(indexTurno, 1)
    setDayConfig({ ...dayConfig })
  }
  return (
    <div className="AdminDayExeption w-100" style={{height: "300px"}} >
      <h4 className="fw-bold mb-4"> Configurar horario del {selectedDay.format("DD/MM/YY")} </h4>
      <DayConfig day={dayConfig} addTurn={addTurn} i={0} onValueChange={onValueChange} removeTurn={removeTurn} />
      <div className="flex">
        <button className="btn fw-bold btn-primary w-75">
          Guardar
        </button>
      </div>
    </div>
  )
}
export default AdminDayExeption
