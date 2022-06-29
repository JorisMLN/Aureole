import React from 'react';
import './header.scss';
import logo from './../../assets/logo.png';
import kart from './../../assets/kartcolor.png';
import startSmoke from './../../assets/startSmoke3.png';
import arrivalSmoke from './../../assets/arrivalSmoke.png';


const Header : React.FC = () => {
  return(
    <>
      <div className='header'>
        <a className='header__link' href="#contentOne">content One</a>
        <a className='header__link' href="#contentTwo">content Two</a>
        <img className='header__logo' src={logo}></img>
        <a className='header__link' href="#contentThree">content Three</a>
        <a className='header__link' href="#contentFour">content Four</a>
        <img className='header__kart' src={kart}></img>
        <img id='startSmoke' src={startSmoke}></img>
        <img id='arrivalSmoke' src={arrivalSmoke}></img>
      </div> 
    </>
  )
}

export default Header;