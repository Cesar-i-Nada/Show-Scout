import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/FormRegister.css'
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
    <div className='espRegister'>
      <label>nombre</label>
      <input className='inp' value={nombreUsuario} placeholder="Nombre" required onChange={nombre} type="text"/><br /><br />
      <label>email</label>
      <input className='inp' value={emailUsuario} placeholder="Email" required onChange={email} type="email" /><br /><br />
      <label>password</label>
      <input className='inp' value={passwordUsuario} placeholder="Password" required onChange={password} type="password"/><br /><br />
      <button onClick={CrearRegistro} className='btnRegistrar'>Registrarse</button><br /><br />
      <Link to={"/"}>Ir a Login</Link>
    </div>
  );
};

export default FormRegister