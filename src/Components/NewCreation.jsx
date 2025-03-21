import React from 'react'
import '../Styles/NewCreation.css'

function NewCreation() {
  return (
    <div>

      <div className='espNewCreation'>
        <p>Información de la obra</p><br /><br />
          <input className='inp' value={nombreUsuario} placeholder="Ingresar nombre" 
            required onChange={nombre} type="text"/><br /><br />
          <input className='inp' value={nombreCompanhia} placeholder="Ingresar compañía" 
            required onChange={companhia} type="text"/>
            <p>Si no pertenece a alguna organización escribir Independiente</p><br /><br />
      </div>
      



    </div>
  )
}

export default NewCreation
