import React, {useState} from 'react'
import '../Styles/CreateProfile.css'
import llamadosUsuarios from '../Services/llamadosUsuarios'


function CreateProfile() {
  
const [Img, setImg]=useState(null)
const [nombreUsuario, SetNombreUsuario] = useState("")
const [passwordUsuario, SetPasswordUsuario] = useState("")
const [nombreCompanhia, SetNombreCompanhia] = useState("")


const subirImagen=(evento)=>{
  const archivo = evento.target.files[0]
  if (archivo) {
const lector = new FileReader()
lector.onloadend = ()=>{
  setImg(lector.result)
}
lector.readAsDataURL(archivo) 
}
}

async function perfilUsuario() {
    const perfil = {
    usuario:nombreUsuario,
    img:Img,
    password:passwordUsuario,
    companhia: nombreCompanhia,
    }
  await llamadosUsuarios.updateUsuarios(perfil,"0118")
}

function nombre(evento) {
 SetNombreUsuario(evento.target.value)
}

function companhia(evento) {
  SetNombreCompanhia(evento.target.value)
 }

function password(evento) {
  SetPasswordUsuario(evento.target.value)
}

  return (

    <div>
      
      <div>
        <h1>Crear tu perfil</h1>
      </div>

      <div className='espCreatePro'>
        <p>Información pública</p><br /><br />

          <p>Cargue la fotografía de su perfil</p>
            <input type="file" onChange={subirImagen}/>
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
            required onChange={nombre} type="text"/><br /><br />
          <input className='inp' value={passwordUsuario} placeholder="Password" 
            required onChange={password} type="password"/><br /><br />
      </div>
      
      <div>
          <button onClick={perfilUsuario} className='btnCreateProfile'>Crear Perfil</button><br /><br />
      </div>

      

    </div> 
  )
}

export default CreateProfile