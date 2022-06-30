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
    const contentOneLink : HTMLElement | null = document.getElementById('contentOneLink');
    const contentTwoLink : HTMLElement | null = document.getElementById('contentTwoLink');
    const contentThreeLink : HTMLElement | null = document.getElementById('contentThreeLink');
    const contentFourLink : HTMLElement | null = document.getElementById('contentFourLink');
    const logo : HTMLElement | null = document.getElementById('logo');
    
    kartIcon?.classList.add('animKart');
    startSmokeIcon?.classList.add('animStartSmoke');
    arrivalSmokeIcon?.classList.add('animArrivalSmoke');
    contentOneLink?.classList.add('contentDodge5');
    logo?.classList.add('contentDodge3');
    contentFourLink?.classList.add('contentDodge1');
    contentTwoLink?.classList.add('contentDodge4');
    contentThreeLink?.classList.add('contentDodge2');
    
    const removeAnimTag = () => {
      kartIcon?.classList.remove('animKart');
      startSmokeIcon?.classList.remove('animStartSmoke');
      arrivalSmokeIcon?.classList.remove('animArrivalSmoke');
      contentOneLink?.classList.remove('contentDodge5');
      contentTwoLink?.classList.remove('contentDodge4');
      logo?.classList.remove('contentDodge3');
      contentThreeLink?.classList.remove('contentDodge2');
      contentFourLink?.classList.remove('contentDodge1');
    }

    setTimeout(removeAnimTag, 4900);
  };

  return(
    <>
      <div className='header'>
        <a id='contentOneLink' className='header__link' href="#contentOne">content One</a>
        <a id='contentTwoLink' className='header__link' href="#contentTwo">content Two</a>

        <img id='logo' className='header__logo' src={logo}></img>

        <a id='contentThreeLink' className='header__link' href="#contentThree">content Three</a>
        <a id='contentFourLink' className='header__link' href="#contentFour">content Four</a>

        <img id='kart' className='header__kart' src={kart} onClick={kartAnimManagement}></img>
        <img id='startSmoke' src={startSmoke}></img>
        <img id='arrivalSmoke' src={arrivalSmoke}></img>
      </div> 
    </>
  )
}

export default Header;