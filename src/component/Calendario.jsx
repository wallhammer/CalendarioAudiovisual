import React, { use, useEffect, useState } from 'react'
import ModalBasico from './ModalBasico'

import CeldaEvento from './CeldaEvento'






export default function Calendario() {

  
  const horas = [7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  const dias = ['lunes','Martes','Miercoles', 'Jueves','Viernes','Sábado', 'Domingo']

  const [today, setToday ] = useState(new Date())
  const [mostrar, setMostrar] = useState(false)

  const [eventos, setEventos] = useState([])
  const [evento, setEvento] = useState({
      NombreEvento: '',
      fecha:'',
      Hora:'',
      HoraFinal:'',
      Dia:'',
      Maestro:'',
      Grado:0,
      Grupo:''
    })
   
    
  const [tooltip, setTooltip] = useState({
    evento:'',
    visible: false,
    x: 0,
    y: 0
  });


  

  const ModalEvent = (flag,hora,dia) => {
    setEvento(prev => ({
      ...prev,
      Hora: horas[hora],
      Dia: dias[dia]
    }))
    setMostrar(flag)
  }



   
  const encontrarEvento = (dia, hora) => {
    return eventos.find(e => e.Dia === dia && e.Hora === hora)
  }

  const estaDentroDeEvento = (dia, hora) => {
    return eventos.some(e =>
      e.Dia === dia &&
      hora > e.Hora &&
      hora <= (e.HoraFinal || e.hora)
    );
  }
  
  
    
  return (
  <div className="mt-5">
      <h2 className="text-center mb-4">Calendario Semanal de Audiovisual</h2>
      <p>{today.getDate()}/{dias[ today.getDay()-1]}/{today.getMonth()+1}/{today.getFullYear()}</p>
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

       {
        mostrar && (
          <ModalBasico cerrarModal={() => setMostrar(false)} evento={evento} setEvento={setEvento} setEventos={setEventos} eventos={eventos}/>          
        )
       }
    </div>
  )
}
