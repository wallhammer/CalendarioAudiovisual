import React from 'react'

export default function TooltipBasico({tooltip}) {
  return (
    <div className='card text-dark bg-white mb-3 tooltip-evento p-0' 
        style={{ top: tooltip.y, left: tooltip.x, position: 'fixed' }}>
        <div class="card-header p-2">
        <h5 className='container-fijo'>{tooltip.evento.NombreEvento}</h5>
        </div>
        <div class="card-body px-3">
        <div className=' border-bottom border-1 border-dark mt-1'>
            <p className='d-flex flex-row justify-content-center my-1'>De <div className='bg-light border mx-1'>{tooltip.evento.Hora}:00</div> a <div className='bg-light border mx-1'>{tooltip.evento.HoraFinal}:00</div> </p>
        </div>
        <div className='my-2 border-bottom border-1 border-dark d-flex flex-column justify-content-center'>
            <p className='mb-0'>con el salon</p>
            <div className='mt-0 mb-1 p-1 border rounded-3 mx-auto bg-light'>{tooltip.evento.Grado}{tooltip.evento.Grupo}</div>
        </div>
        <div >
            <p className='my-0'>con el maestro(a)</p>
            <h6 class="card-title container-fijo bg-light border rounded-3 p-2">{tooltip.evento.Maestro}</h6>
        </div>
        </div>
    </div>
  )
}
