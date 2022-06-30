import React, { useEffect, useState } from 'react';
import './header.scss';
import logo from './../../assets/logo.png';
import kart from './../../assets/kartcolor.png';
import startSmoke from './../../assets/startSmoke3.png';
import arrivalSmoke from './../../assets/arrivalSmoke.png';


const Header : React.FC = () => {

  const kartAnimManagement = () => {
    const kartIcon : HTMLElement | null = document.getElementById('kart');
    const startSmokeIcon : HTMLElement | null = document.getElementById('startSmoke');
    const arrivalSmokeIcon : HTMLElement | null = document.getElementById('arrivalSmoke');
    const contentOne : HTMLElement | null = document.getElementById('contentOne');
    const contentTwo : HTMLElement | null = document.getElementById('contentTwo');
    const contentThree : HTMLElement | null = document.getElementById('contentThree');
    const contentFour : HTMLElement | null = document.getElementById('contentFour');
    const logo : HTMLElement | null = document.getElementById('logo');
    
    kartIcon?.classList.add('animKart');
    startSmokeIcon?.classList.add('animStartSmoke');
    arrivalSmokeIcon?.classList.add('animArrivalSmoke');
    contentOne?.classList.add('contentDodge5');
    logo?.classList.add('contentDodge3');
    contentFour?.classList.add('contentDodge1');
    contentTwo?.classList.add('contentDodge4');
    contentThree?.classList.add('contentDodge2');
    
    const removeAnimTag = () => {
      kartIcon?.classList.remove('animKart');
      startSmokeIcon?.classList.remove('animStartSmoke');
      arrivalSmokeIcon?.classList.remove('animArrivalSmoke');

      contentOne?.classList.remove('contentDodge5');
      contentTwo?.classList.remove('contentDodge4');
      logo?.classList.remove('contentDodge3');
      contentThree?.classList.remove('contentDodge2');
      contentFour?.classList.remove('contentDodge1');
    }

    setTimeout(removeAnimTag, 4900);
  };

  return(
    <>
      <div className='header'>
        <a id='contentOne' className='header__link' href="#contentOne">content One</a>
        <a id='contentTwo' className='header__link' href="#contentTwo">content Two</a>

        <img id='logo' className='header__logo' src={logo}></img>

        <a id='contentThree' className='header__link' href="#contentThree">content Three</a>
        <a id='contentFour' className='header__link' href="#contentFour">content Four</a>

        <img id='kart' className='header__kart' src={kart} onClick={kartAnimManagement}></img>
        <img id='startSmoke' src={startSmoke}></img>
        <img id='arrivalSmoke' src={arrivalSmoke}></img>
      </div> 
    </>
  )
}

export default Header;