import React from 'react'
import Calendario from './Calendario';
import CeldaEvento from './CeldaEvento';
import TooltipBasico from './TooltipBasico'

export default function ({ encontrarEvento, estaDentroDeEvento, ModalEvent,setTooltip, tooltip }) {
  const horas = Array.from({length:14}, (_, i) => i+7)
  const dias = Array.from({length:7}, (_,k) => k)
  
  return (
    <div className="table-responsive">
            <table className="table table-bordered text-center align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">Hora</th>
                  {dias.map((dia) => (
                    <th scope="col" key={dia}>{dia}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {horas.map((hora) => (
                  <tr key={hora} >
                    <th scope="row" >{hora}:00</th>
                    {
                      dias.map(dia => (
                        <td>{dia},{hora}</td>
                      ))
                    }
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  )
}
