import React from 'react'
import '../Styles/JobBoard.css'

function JobBoard() {
  return (
    <div>
    
      <div>
        <h2>Bolsa de empleo</h2>
      </div>

      <div>
        <h3>Obtener un empleo</h3>
      </div>

      <div>
        <h3>Categoría</h3>
      </div>

      <div>
        <ul>
          <li>Técnicos</li>
          <li>Profesores</li>
          <li>Artistas</li>
          <li>Administrativo</li>
          <li>Vestuarista</li>
          <li>Productor</li>
          <li>Coreógrafo/a</li>
        </ul> 
      </div>

      <div className='espPubliJob'>

      <div>
        <h3>Publicar un empleo</h3>
      </div>


          <p>Ingrese la info aquí</p>
          
          <input className='inp' value={categoriaEmpleo} placeholder="Ingresar categoría" 
            required onChange={categoria} type="text"/><br /><br />
          <input className='inp' value={direccionEmpleo} placeholder="Ingresar direccion" 
            required onChange={direccion} type="text"/>
          <input className='inp' value={horarioEmpleo} placeholder="Ingresar horario" 
            required onChange={horario} type="text"/>
            <input className='inp' value={descripcionEmpleo} placeholder="Ingresar descripción" 
            required onChange={descripcion} type="text"/>
      </div>

    </div>
  )
}

export default JobBoard