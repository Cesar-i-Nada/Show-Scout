import React from 'react'
import '../Styles/WorkSheet.css'

function WorkSheet() {
  return (
    <div>
      
      <div>
        <h3>Datos de la pieza</h3>
      </div>

      <div className='espDatosPieza'>
      <h1 className='titulo'>Datos de la pieza</h1>
      <p className='titulo'>Ingrese los datos generales de su obra</p><br />
      <input className='inp' value={tituloPieza} placeholder="Titulo de la obra" required onChange={pieza} type="pieza" /><br /><br />
      <input className='inp' value={nombreDirector} placeholder="Director" required onChange={director} type="text"/><br /><br />   
      <input className='inp' value={nombreElenco} placeholder="Elenco" required onChange={elenco} type="text"/><br /><br />   
      <input className='inp' value={sinopsis} placeholder="Sinopsis" required onChange={sinopsis} type="text"/><br /><br />   
      <input className='inp' value={anhoPieza} placeholder="Año" required onChange={anho} type="anho"/><br /><br />
      <button onClick={CrearPieza} className='btnCrearPieza'>Crear pieza</button><br /><br />
      <Link to={"/"}>Ir a ...</Link>
    </div>
      
    </div>
  )
}

export default WorkSheet
