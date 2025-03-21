import React from 'react'

function FirstDataPiece() {
  return (
    <div>
      
      <div>
        <h3>Datos para iniciar la gestión</h3>
      </div>

      <div className='espDatosPieza'>
      <h1 className='titulo'>Datos para iniciar la gestión</h1>
      <p className='titulo'>Ingrese los datos básicos para dar comienzo a su producción.</p><br />
      <input className='inp' value={fechaInicio} placeholder="Fecha de inicio" required onChange={inicio} type="pieza" /><br /><br />
      <input className='inp' value={fechaEstreno} placeholder="Fecha de estreno" required onChange={estreno} type="text"/><br /><br />   
      <input className='inp' value={presupuestoInicial} placeholder="Presupuesto inicial" required onChange={presupuesto} type="text"/><br /><br />   
      <input className='inp' value={cantidadEnsayos} placeholder="Cantidad de ensayos" required onChange={ensayos} type="text"/><br /><br />   
      <input className='inp' value={cantidadMiembros} placeholder="Cantidad de miembros" required onChange={miembros} type="anho"/><br /><br />
      <button onClick={CrearPieza} className='btnCrearPieza'>Crear pieza</button><br /><br />
      <Link to={"/"}>Ir a ...</Link>
    </div>
      
    </div>
  )
}

export default FirstDataPiece
