import React from 'react'
import { useState, useEffect } from 'react'

export default function Hoy() {
  const today = new Date();
  const m = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 
    'Junio', 'Julio',    'Agosto','Septiembre','Octubre',
    'Noviembre', 'Diciembre']


  return (
    <div>

      <h1 id='hora'>{today.getHours()}:{today.getMinutes()}</h1>
      <h2 id='dia'>{today.getDate()} de {m[today.getMonth()]} del {today.getFullYear()}</h2>
    </div>
  )
}

