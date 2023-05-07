import styled from 'styled-components'

export const Header = styled.header`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 2% 0 3% 0;
  border-bottom: 1px solid hsl(219, 35%, 92%);
`

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
`
export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4%;
`
export const NavInnerCont = styled.nav`
  display: flex;
  margin-left: 5%;
  width: 100%;
`
export const NavLinkUl = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: start;
`

export const ImgLi = styled.img`
  width: 50px;
`