import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css'
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

function Welcome() {
    const {t, i18n} = useTranslation(["welcome"]);
    const changeLanguage = () =>{
        i18n.changeLanguage("en", "es");
    }
    return (
        <div>
          <div className="navbar">
            <a href="#home">Home</a>
            <a href="#news">Synchro</a>
              <div className="dropdown">
                <button className="dropbtn">Bolsa de empleo 
                  <i className="fa fa-caret-down"></i>
                </button>
                  <div className="dropdown-content">
                    <a href="#">Cursos</a>
                    <a href="#">App</a>
                    <a href="#">Podcast</a>
                    <a href="#">Manual</a>
                  </div>
              </div> 
                    <div className='transSelect'>
                      {t("title", { name: "de César i Nada"})}
                      <button className='transBtn' onClick={changeLanguage}>English</button>
                      <button className='transBtn' onClick={changeLanguage}>Español</button>
                    </div>
          </div>
        </div>
    );
}

function NavBar() {
  return (
    <Suspense fallback = "Cargando traducciones">
    <Welcome />
    </Suspense>
  );
  
}

export default NavBar;