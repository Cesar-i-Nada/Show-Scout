import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Register.css'
import llamadosUsuarios from '../Services/llamadosUsuarios'

function FormRegister() {

const [nombreUsuario,  SetNombreUsuario] = useState("")
const [passwordUsuario, SetPasswordUsuario] = useState("")
const [emailUsuario, SetEmailUsuario] = useState("")

function nombre(evento) {
 SetNombreUsuario(evento.target.value)
}

function password(evento) {
  SetPasswordUsuario(evento.target.value)
}

function email(evento) {
  SetEmailUsuario(evento.target.value)
}
 function CrearRegistro() {
   llamadosUsuarios.postUsuarios(nombreUsuario,passwordUsuario,emailUsuario)  
}
      
return (
    <div>
      <label>Nombre</label>
      <input value={nombreUsuario} onChange={nombre} type="text"/><br /><br />
      <label>Contraseña</label>
      <input value={passwordUsuario} onChange={password} type="password" /><br /><br />
      <label>email</label>
      <input value={emailUsuario} onChange={email} type="text"/><br /><br />
      <button onClick={CrearRegistro} className='btnRegistrar'>Registrarse</button>
      <Link to={"/"}>Ir a Login</Link>
    </div>
  );
};

export default FormRegister