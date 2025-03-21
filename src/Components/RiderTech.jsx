import React from 'react'
import '../Styles/RiderTech.css'

function RiderTech() {
  return (
    <div>

      <div>
        <h3>Rider técnico</h3>
      </div>

      <div className='espDatosPieza'>
      <h1 className='titulo'>Datos del Rider técncico</h1>
      <p className='titulo'>Ingrese los datos básicos del rider.</p><br />
      <input className='inp' value={tituloPieza} placeholder="Titulo de la obra" required onChange={titulo} type="pieza" /><br /><br />
      <input className='inp' value={directorPieza} placeholder="Director de la obra" required onChange={director} type="text"/><br /><br />   
      <input className='inp' value={elencoPieza} placeholder="Elenco de la obra" required onChange={elenco} type="text"/><br /><br />   
      <input className='inp' value={anhoCreacion} placeholder="Año" required onChange={anho} type="text"/><br /><br />   
      <input className='inp' value={sinopsisPieza} placeholder="Sinopsis de la obra" required onChange={sinopsis} type="anho"/><br /><br />
      <input className='inp' value={requerimientosTecnicos} placeholder="Requerimientos técnicos" required onChange={requerimientos} type="anho"/><br /><br />
      <input className='inp' value={planoLuces} placeholder="Plano de luces" required onChange={plano} type="anho"/><br /><br />
      <button onClick={CrearPieza} className='btnCrearRider'>Crear rider técnico</button><br /><br />
      <Link to={"/"}>Ir a ...</Link>
    </div>
      
    </div>
  )
}

export default RiderTech
