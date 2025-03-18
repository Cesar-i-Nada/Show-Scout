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
            <a href="#news">News</a>
            <div className="dropdown">
            <button className="dropbtn">Dropdown 
            <i class="fa fa-caret-down"></i>
            </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>
              </div>

              <div className='transSelect'>
                 {t("title", { name: "de César i Nada"})}
                <button onClick={changeLanguage}>English</button>
                <button onClick={changeLanguage}>Español</button>
              </div>

            </div> 
          </div>

          <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li className='about'><a href="#about">About</a></li>
</ul>



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
