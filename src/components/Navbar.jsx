
import Logo from '/logo.svg'
import Cart from '/icon-cart.svg'
import Avatar from '/image-avatar.png'
import { Header, LeftContainer, NavInnerCont, RightContainer, NavLinkUl, ImgLi } from '../components/NavbarStyle'

const Navbar = () => {
  return (
    <Header>
      <LeftContainer>
        <img style={{width: '138px'}} src={Logo} alt='logo' />

        <NavInnerCont>
          <NavLinkUl>
            <li><a href='#'> Collections </a></li>
            <li><a href='#'> Men </a></li>
            <li><a href='#'> Women </a></li>
            <li><a href='#'> About </a></li>
            <li><a href='#'> Contact </a></li>
          </NavLinkUl>
        </NavInnerCont>
      </LeftContainer>

      <RightContainer>
        <NavLinkUl>
          <li><button style={{border: 'none'}}><img src={Cart} alt='' /></button></li>
          <li><ImgLi src={Avatar} alt='' /></li>
        </NavLinkUl>
      </RightContainer>
    </Header>
  )
}

export default Navbar
