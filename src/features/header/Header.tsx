import './header.scss';

const Header = () => {
  return(
    <>
      <div className='header'>
        <a className='header__link' href="#contentOne">content One</a>
        <a className='header__link' href="#contentTwo">content Two</a>
        <a className='header__link' href="#contentThree">content Three</a>
        <a className='header__link' href="#contentFour">content Four</a>
      </div>
      
    </>
  )
}

export default Header;