import React, { useState, useEffect } from 'react'
import '../Styles/FormLogin.css'
import { Link, useNavigate } from 'react-router-dom'
import llamadosUsuarios from '../Services/llamadosUsuarios'
import CabraZacIzq from '../assets/img/CabraZacIzq.png'
import Cabritas from '../assets/img/CabritasClr.gif'

function FormLogin() {

  const [nombreUsuario,  SetNombreUsuario] = useState("")
  const [passwordUsuario, SetPasswordUsuario] = useState("")
  const [usuarios, SetUsuarios] = useState("")
  const navigate = useNavigate()

  useEffect (() => {

    async function fetchDataUsers() {

      const datos = await llamadosUsuarios.getUsuarios()
      SetUsuarios(datos)
    };

    fetchDataUsers();
  }, []);

   function nombre(evento) {
    SetNombreUsuario(evento.target.value)
   }
   
   function password(evento) {
     SetPasswordUsuario(evento.target.value)
   }

   function Iniciar() { 

    const registrado = usuarios.filter(usuario => usuario.usuario === nombreUsuario && usuario.password === passwordUsuario)
    
    if (registrado.length === 0) {
      console.log('Usuario no registrado');
    } else{
      navigate('/Piezas')

      
    }
   }

return (
<div>
    
    
    <div className="container">
        <div>
            <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   
        </div>

        <div>  
          <div className='espLogin'>
            <input className='inp' value={nombreUsuario} placeholder="Nombre" required onChange={nombre} type="text"/><br /><br />
            <input className='inp' value={passwordUsuario} placeholder="Contraseña" required onChange={password} type="password" /><br /><br />
            <button onClick={Iniciar} className='btnIniciar'>Iniciar</button>
            <p>¿Ya tienes una cuenta? <Link to = "/Register">Ir a registrarse</Link></p>      
          </div>
        </div>

      </div>


        <div className="textDiv">
          <h1>Herramientas para producir danza, teatro o circo.</h1>
        </div>

      <div className="container">

        <div>
            <h1>Mejora los procesos de producción </h1>
            <p>Esta herramienta es útil y práctica para tus creaciones de arte escénico</p>
        </div>

        <div>
        <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   

        </div>  
    </div>
        
    <div>
        <div class="footer"><h3>Contáctenos</h3>
        <div>
            <h4>ShowScout@gmail.com</h4>
            <a class="cierre" href="login/login.html">Cerrar sesión</a></div>
        </div>
    </div>

</div>
  
    );
  };
  

export default FormLogin