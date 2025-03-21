import React from 'react'
import '../Styles/FirstDataPiece.css'

function FinancialControl() {
  return (
    <div>

      <div>
        <h3>Control Financiero</h3>
      </div>

      <div className='espControlFinanzas'>
        <h1 className='titulo'>Datos fincaieros de la obra.</h1>
        <p className='titulo'>Ingrese los datos económicos de su creación.</p><br />
        <input className='inp' value={ingresosPieza} placeholder="Ingresos de la obra" required onChange={ingresos} type="pieza" /><br /><br />
        <input className='inp' value={egresosPieza} placeholder="Egresos de la obra" required onChange={egresos} type="text"/><br /><br />   
        <input className='inp' value={ivaPieza} placeholder="I.V.A" required onChange={iva} type="text"/><br /><br />   
        <button onClick={CrearPieza} className='btnCrearPresupuesto'>Crear el control financiero</button><br /><br />
        <Link to={"/"}>Ir a ...</Link>
      </div>

    </div>
  )
}

export default FinancialControl