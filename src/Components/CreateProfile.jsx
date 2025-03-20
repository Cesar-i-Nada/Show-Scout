import React from 'react'
import '../Styles/CreateProfile.css'

function CreateProfile() {
  return (
    |<div>
    
      <div className='espCreatePro'>
        <h1>Crear tu perfil</h1>
          <p>Información pública</p><br /><br />
            <p>Cargue la fotografía de su perfil</p>
            <input type="file"/>
            <input type="submit" />
            <input className='inp' value={nombreUsuario} placeholder="Ingresar nombre" 
            required onChange={nombre} type="text"/><br /><br />
            <input className='inp' value={nombreCompanhia} placeholder="Ingresar compañía" 
            required onChange={companhia} type="text"/>
            <p>Si no pertenece a alguna organización escribir Independiente</p><br /><br />
      </div>

      <div>
        <p>Información privada</p>
          <input className='inp' value={nombreUsuario} placeholder="nombre" 
          required onChange={nombre} type="nombre"/><br /><br />
          <input className='inp' value={passwordUsuario} placeholder="Password" 
          required onChange={password} type="password"/><br /><br />
      </div>
          <button onClick={CrearProfile} className='btnCreateProfile'>Crear Perfil</button><br /><br />
          <Link to={"/"}>Ir a Profile</Link>
      <div> 
        <div className="container">
          <div> 
            <button value={CargarNombre} onClick={Cargar} >Cargar</button>
          </div> 
        </div>

      <div className='inpCreatePro'>
        <ul>
          {DatosProfile.map(Dato=>{
            return <li key={dato.id}>{dato.dato} 
            <button value={EliminarDato} onClick={()=>Eliminar(dato.id)}>Eliminar</button> 
            <button value={EditarDato} onClick={()=>Editar(dato.id)}>Editar</button></li>
            })}
        </ul>
      </div>
  </div> 

            
    </div>
  )
}

export default CreateProfile