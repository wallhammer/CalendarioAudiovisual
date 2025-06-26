import React from 'react'
import TooltipBasico from './TooltipBasico'

export default function CeldaEvento({key, duracion, encontrarEvento, eventoEncontrado, setTooltip, tooltip, dia, hora}) {
  return (
    <td 
    key={key}
    rowSpan={duracion}
    className='border rounded-4 bg-primary text-white'

        
    
      
      
      onMouseEnter={(e) => {
        const ev = encontrarEvento(dia,hora)
        if (ev) {
            setTooltip({
            evento:ev,
            visible:true,
            x:e.clientX,
            y:e.clientY
            })
        }

        }}


        onMouseMove={(e) => {
        if (tooltip.visible){
            setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));

        }
        }}  

        onMouseLeave={ () => {
        setTooltip({visible:false, x: 0, y: 0 })
        }}
        >

        {eventoEncontrado.NombreEvento}
        <p className='text-white'>de {eventoEncontrado.Hora}:00</p>



        {tooltip.visible &&(
        <TooltipBasico tooltip={tooltip}/>
        )}

    </td>
  )
}
