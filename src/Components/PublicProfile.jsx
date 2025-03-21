import React, { useEffect, useState, } from 'react';
import llamadosTotales from '../Services/llamadosTotales';
import '../Styles/PublicProfile.css';



function PiezasRealizadas() {

    const [PiezasRealizadas, SetImprimir] = useState([])

    useEffect (() => {
        async function traerPiezas(){
          const piezas = await llamadosTotales.getTotales() 
          SetImprimir(piezas)
        }
        traerPiezas();
      }, []);

  return (
    <div>
      <p>Piezas realizadas</p>
      <p>0</p>
    </div>
  )
}

export default PiezasRealizadas
