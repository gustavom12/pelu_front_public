import React, { useContext, useState } from "react";
import CalendaryMonth from "./CalendaryMonth/CalendaryMonth";
import './CalendarySection.sass'
import SelectType from "./SelectType/SelectType";
import userContext from '../../context/userContext';
import ThemeContext from "../../context/CalendaryContext";
import { url } from "../../helpers&hooks/useFetch";
import TurnResponseContext from "../../context/turnResponseContext";

function CalendarySection() {
  const [selectedType, setSelectedType] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<number | null>(null)
  const { user } = useContext<any>(userContext)
  const {Post} = useContext<any>(TurnResponseContext)
  const { selectedDay } = useContext<any>(ThemeContext)
  const onSubmit = async (e: any) => {
    e.preventDefault()
    let diaDeLaSemana = selectedDay.day()
    if (diaDeLaSemana === 0) diaDeLaSemana = 7
    let parsedTime:any = selectedTime
    parsedTime?.toString().length > 5 ?
      parsedTime = parsedTime?.toString().substring(0, 2) + ":" + parsedTime?.toString().substring(2, 4)
      :
      parsedTime = "0" + parsedTime?.toString().substring(0, 1) + ":" + parsedTime?.toString().substring(1, 3)
    const body = {
      "NegocioId": "1",
      "UsuarioId": user.UsuarioId,
      "dia": diaDeLaSemana,
      "fecha": selectedDay.format("yyyy/MM/DD"),
      "hora": parsedTime,
      "nombre_usuario": user.Nombre,
      "nombre_negocio": "nombre",
      "duracion_minutos": selectedType.duracion_minutos,
      precio: selectedType.costo,
      categoria: selectedType.nombre
    }
    await Post({url: `${url}crear_turno.php`, body})
  }
  return (
    <form onSubmit={onSubmit} className="CalendarySection d-flex pb-1">
      <SelectType selectedType={selectedType} setSelectedType={setSelectedType} />
      <CalendaryMonth
        selectedType={selectedType}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
    </form>
  )
}
export default CalendarySection
