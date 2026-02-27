import React, { useState } from 'react'
import Calendario from './Calendario'

const grupo = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R']

export default function ModalBasico({cerrarModal, evento, setEvento, setEventos, }) {

  const horas = [7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
      
      <div className="modal show d-block " tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            
            <div className="modal-header bg-light">
                <h5 className='mb-0 w-100'>
                  <input 
                  type="text" 
                  placeholder='Evento' 
                  className='border-0 border-bottom me-0 bg-light w-100'
                  onChange={(e) => {
                    setEvento(prev => ({
                      ...prev,
                      NombreEvento:e.target.value
                    }))}}/>
                </h5>
                
              <button type="button" className="btn-close" onClick={cerrarModal}></button>
            </div>

            <div className="modal-body">
              <form action="" className='form-group d-flex flex-column'>

                <div className='container'>
                  <p className='my-0'>Dia {evento.Dia}</p>
                  <div className='row justify-content-center form-outline mb-3 mx-auto'>

                    <p className='col-1'>De </p>

                    <select className='border-0 col-2 h-25 p-0' value={evento.Hora}
                      onChange={(e) => {
                        setEvento(prev => ({
                          ...prev,
                          Hora: parseInt(e.target.value)
                        }))
                      }}
                    >
                      <option value="">Selecciona una hora</option>
                      {
                        horas.map((num) => (
                          <option key={num} value={num}>{num + ':00'}</option>
                        ))
                      }
                    </select>

                    <p className='col-1'>-</p>

                    <select className='border-0 col-2 h-25 p-0' value={evento.HoraFinal}
                      onChange={(e) => {
                        setEvento(prev => ({
                          ...prev,
                          HoraFinal: parseInt(e.target.value)
                        }))
                      }}
                    >
                      <option value="">00:00</option>
                      {
                        horas.map((num) => (
                          <option key={num} value={num}>{num + ':00'}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
                

                <input 
                  type="text" 
                  placeholder='Docente Responsable'
                  className='form-control mb-2'
                  onChange={ (e) => {
                    setEvento(prev => ({
                      ...prev,
                      Maestro:e.target.value
                    }))
                  }}
                />
                <div className='colabserGrup d-flex flex-row '>
                  <select value={evento.Grupo} 
                  className='m-1 form-control'
                  onChange={(e) => {setEvento(prev => ({...prev, Grupo: e.target.value}))}}>
                    <option value="">Grupo</option>
                    {grupo.map((grupo,i) => (<option key={i} value={grupo} >{grupo}</option>))}
                  
                  </select>
                  
                  <input className='form-control' type="number" min='1' max='6' step='1' placeholder='Grado'
                    onChange={ (e) => {
                      setEvento(prev => ({
                        ...prev,
                        Grado:e.target.value
                      }))
                    }}
                    onKeyDown={(e) => {
                      const teclasPermitidas = [
                        'ArrowUp',
                        'ArrowDown',
                        'Tab',
                        'Backspace',
                        'Delete'
                      ];
                      if (!teclasPermitidas.includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onPaste={(e) => e.preventDefault()}
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={cerrarModal}>
                Cerrar
              </button>
              <button className="btn btn-primary" 
              onClick={() =>{ 
                setEventos(prev => [...prev,evento]);
                
                setEvento({
                  NombreEvento: '',
                  Hora: '',
                  HoraFinal:'',
                  Dia: '',
                  Maestro: '',
                  Grado: 0,
                  Grupo: ''
                });
                cerrarModal();
                }}>
                Guardar cambios
              </button>
            </div>

          </div>
        </div>
      </div>
  )
}
