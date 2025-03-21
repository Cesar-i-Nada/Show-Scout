import React from 'react'

function FirstDataPiece() {
  return (
    <div>
      
      <div>
        <h3>Datos de la pieza</h3>
      </div>

      <div className='espDatosPieza'>
      <h1 className='titulo'>Datos de la pieza</h1>
      <p className='titulo'>ingrese los datos generales de su obra</p><br />
      <input className='inp' value={nombreDirector} placeholder="Director" required onChange={director} type="text"/><br /><br />   
      <input className='inp' value={nombrePieza} placeholder="Pieza" required onChange={pieza} type="pieza" /><br /><br />
      <input className='inp' value={anhoPieza} placeholder="Año" required onChange={anho} type="anho"/><br /><br />
      <button onClick={CrearPieza} className='btnCrearPieza'>Crear pieza</button><br /><br />
      <Link to={"/"}>Ir a ...</Link>
    </div>
      
    </div>
  )
}

export default FirstDataPiece
