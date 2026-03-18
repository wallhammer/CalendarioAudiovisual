import React, { useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { es } from 'date-fns/locale'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import ModalBasico from './ModalBasico'
import TooltipBasico from './TooltipBasico'

const locales = { 'es': es }
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales })
const messages = {
  today: 'Hoy', previous: 'Anterior', next: 'Siguiente',
  month: 'Mes', week: 'Semana', day: 'Día', agenda: 'Agenda',
  date: 'Fecha', time: 'Hora', event: 'Evento', noEventsInRange: 'Sin eventos',
}

export default function Calendario() {
  const [eventos, setEventos] = useState([])
  const [mostrar, setMostrar] = useState(false)
  const [slotInfo, setSlotInfo] = useState(null)
  const [tooltip, setTooltip] = useState({ evento: null, visible: false, x: 0, y: 0 })

  const handleSelectSlot = (slot) => {
    setSlotInfo(slot)
    setMostrar(true)
  }

  const handleSelectEvent = (evento, e) => {
    setTooltip({ evento, visible: true, x: e.clientX, y: e.clientY })
    setTimeout(() => setTooltip(prev => ({ ...prev, visible: false })), 3000)
  }

  return (
    <div className='mt-3' style={{ height: '85vh' }}>
      <h2 className='text-center mb-3'>Calendario Semanal de Audiovisual</h2>
      <Calendar
        localizer={localizer}
        culture='es'
        events={eventos}
        defaultView='week'
        views={['week', 'day', 'agenda']}
        min={new Date(0, 0, 0, 7, 0)}
        max={new Date(0, 0, 0, 21, 0)}
        titleAccessor='NombreEvento'
        startAccessor='start'
        endAccessor='end'
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        messages={messages}
        style={{ height: '100%' }}
      />
      {mostrar && (
        <ModalBasico
          cerrarModal={() => setMostrar(false)}
          slotInfo={slotInfo}
          setEventos={setEventos}
          eventos={eventos}
        />
      )}
      {tooltip.visible && tooltip.evento && <TooltipBasico tooltip={tooltip} />}
    </div>
  )
}
