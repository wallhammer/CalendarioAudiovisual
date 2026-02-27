import React from 'react'
import Calendario from './Calendario';
import CeldaEvento from './CeldaEvento';
import TooltipBasico from './TooltipBasico'

export default function ({horas, dias, encontrarEvento, estaDentroDeEvento, ModalEvent,setTooltip, tooltip }) {
  return (
    <div className="table-responsive">
            <table className="table table-bordered text-center align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">Hora</th>
                  {dias.map((dia, index) => (
                    <th scope="col" key={index}>{dia}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {horas.map((hora, i) => (
                  <tr key={i} >
                    <th scope="row" >{hora}:00</th>
                    {dias.map((dia, j) => {
                        const eventoEncontrado = encontrarEvento(dia, hora)
                        const ocupado = estaDentroDeEvento(dia, hora);
    
                        if (ocupado) return null
                        if (eventoEncontrado) {
                          const duracion = (eventoEncontrado.HoraFinal || eventoEncontrado.Hora) - eventoEncontrado.Hora +1
                          
                         return (
    
                          
                            <CeldaEvento 
                            key={j}
                            duracion={duracion}
                            rowSpan={duracion}
                            encontrarEvento={encontrarEvento} 
                            eventoEncontrado={eventoEncontrado}
                            setTooltip={setTooltip}
                            tooltip={tooltip}
                            dia={dia}
                            hora={hora}
                            style={{
                              cursor:eventoEncontrado? 'none': 'pointer',
                            }}
                            />
                          
                          );
                        }
                        return (
                          <td
                            key={j}
                            onClick={() => ModalEvent(true, i, j)}
                            className="celda-fija px-0 py-0"
                            style={{ cursor: 'pointer' }}
                          />
                        );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  )
}
