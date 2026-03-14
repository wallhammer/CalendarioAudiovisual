import { useEffect, useState } from "react"

<<<<<<< HEAD
export default function ({ encontrarEvento, estaDentroDeEvento, ModalEvent,setTooltip, tooltip }) {
  const horas = Array.from({length:14}, (_, i) => i+7)
  const dias = Array.from({length:7}, (_,k) => k)
=======

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
>>>>>>> 2fdb359f271a95b3211f40771c45911e275569d6
  
  return (
   
    <div className="table-responsive">
<<<<<<< HEAD
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
=======
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
        

    
>>>>>>> 2fdb359f271a95b3211f40771c45911e275569d6
  )
}
