import React, { useState } from 'react'
import { format } from 'date-fns'

const grupos = ["1A","1B","1C","1D","1E","1F","1G","1H","1I","1J","1K","1L","1M","1N","1O","1P","1Q","1R"]

export default function ModalBasico({ cerrarModal, slotInfo, setEventos }) {
  const [nombre, setNombre] = useState('')
  const [maestro, setMaestro] = useState('')
  const [asignados, setAsignados] = useState([])
  const [start, setStart] = useState(slotInfo?.start || new Date())
  const [end, setEnd] = useState(slotInfo?.end || new Date())

  const guardar = () => {
    const nuevoEvento = {
      NombreEvento: nombre,
      start,
      end,
      Maestro: maestro,
      Grupos: asignados,
    }
    setEventos(prev => [...prev, nuevoEvento])
    cerrarModal()
  }

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-light">
            <h5 className="mb-0 w-100">
              <input
                type="text"
                placeholder="Evento"
                className="border-0 border-bottom bg-light w-100"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </h5>
            <button type="button" className="btn-close" onClick={cerrarModal}></button>
          </div>

          <div className="modal-body">
            <form className="form-group d-flex flex-column">
              <div className="container">
                <div className="row mb-3">
                  <label className="col-2">Inicio:</label>
                  <input
                    type="datetime-local"
                    className="form-control col"
                    value={format(start, "yyyy-MM-dd'T'HH:mm")}
                    onChange={(e) => setStart(new Date(e.target.value))}
                  />
                </div>
                <div className="row mb-3">
                  <label className="col-2">Fin:</label>
                  <input
                    type="datetime-local"
                    className="form-control col"
                    value={format(end, "yyyy-MM-dd'T'HH:mm")}
                    onChange={(e) => setEnd(new Date(e.target.value))}
                  />
                </div>
              </div>

              <input
                type="text"
                placeholder="Docente Responsable"
                className="form-control mb-2"
                value={maestro}
                onChange={(e) => setMaestro(e.target.value)}
              />

              <select
                className="form-control mb-2"
                onChange={(e) => {
                  if (e.target.value && !asignados.includes(e.target.value)) {
                    setAsignados(prev => [...prev, e.target.value])
                  }
                }}
              >
                <option value="">Grupo</option>
                {grupos.map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              <ul className="list-group">
                {asignados.map(item => (
                  <li className="list-group-item p-1" key={item}>{item}</li>
                ))}
              </ul>
            </form>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={cerrarModal}>Cerrar</button>
            <button className="btn btn-primary" onClick={guardar}>Guardar cambios</button>
          </div>
        </div>
      </div>
    </div>
  )
}
