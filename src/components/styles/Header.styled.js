import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color:#00c3a5;
    color:blue;
    padding:0;
`

export const Nav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;


  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
export const Logo = styled.img`
  padding:20px 45px;
  max-height:100px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`