import React, { } from "react";
import { ThemeProvider } from "../../context/CalendaryContext";
import CalendaryMonth from "./CalendaryMonth/CalendaryMonth";
import './CalendarySection.sass'
import SelectType from "./SelectType/SelectType";
function CalendarySection() {
  return (
    <ThemeProvider>
      <section className="CalendarySection d-flex">
        <SelectType />
        <CalendaryMonth />
      </section>
    </ThemeProvider>
  )
}
export default CalendarySection
