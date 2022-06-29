import './header.scss';
import logo from './../../assets/logo.png'

const Header = () => {
  return(
    <>
      <div className='header'>
        <a className='header__link' href="#contentOne">content One</a>
        <a className='header__link' href="#contentTwo">content Two</a>
        <img className='header__logo' src={logo}></img>
        <a className='header__link' href="#contentThree">content Three</a>
        <a className='header__link' href="#contentFour">content Four</a>
      </div>
      
    </>
  )
}

export default Header;