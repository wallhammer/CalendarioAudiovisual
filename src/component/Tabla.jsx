import { useEffect, useState } from "react"


export default function () {

  const Semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

  const diaActual = {
    dia:new Date().getDate(),
    mes:new Date().getMonth(),
    año: new Date().getFullYear(),
    semana:new Date().getDate()
  }

  const Semanas = [
    {
      id:1,
      Dias:['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'],
      Horas: Array.from({length:14},(_,i)=>i+1)
    }
  ]
  const [cont, setCont] = useState(0)
  const SemanaActual = Semanas[cont]
  
  return (
   
    <div className="table-responsive">
      <button type="button "onClick={() => {if (cont > 0) setCont(cont - 1)}}>prev</button>
      <button type="button "onClick={() => {if (cont < Semanas.length - 1) setCont(cont + 1)}}>next</button>
      <table className="table table-bordered text-center align-middle mx-2">
        <thead className="table.light">
          <tr>
            <th scope="col">Hora</th>
            {
              SemanaActual.Dias.map(dia => (
                <th key={dia} scope="col">{dia}</th>
              ))
            }
          </tr>
        </thead>
        
        <tbody>
          {
            
            SemanaActual.Horas.map(hora => (
              <tr key={hora}>
                <th scope="row">{hora}:00</th>
                {
                   SemanaActual.Dias.map(dia => (
                    <td key={`${dia}-${hora}`}>{`${dia}/${hora}:00`}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
