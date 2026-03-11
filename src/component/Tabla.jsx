

export default function () {

  const Semana = Array.from({length:4},(_,i) => i+1)
  const Dias = Array.from({length:7},(_,i) => i+1)
  const Horas = Array.from({length:14}, (_,i) => i+7)

  return (
    <div className="table-responsive">
      {
        Semana.map(semana => (
           <table className="table table-bordered text-center align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">Hora</th>
                  {Dias.map(dia => (
                    <th scope="col" key={dia}>{dia}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Horas.map(hora => (
                  <tr key={hora} >
                    <th scope="row" >{hora}:00</th>
                    {
                      Dias.map(dia => (
                        <td key={toString(dia)+toString(hora)}>{dia}/ {hora}:00 </td>
                      ))
                    }
                  </tr>
                ))}
              </tbody>
            </table>
        ))
      }
           
          </div>
  )
}
