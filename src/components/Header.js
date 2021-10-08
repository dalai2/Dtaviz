import {StyledHeader,Nav,Logo} from './styles/Header.styled'
import {Container} from './styles/Container.styled'


export default function Header(){
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/Logo.svg' />

                </Nav>
            </Container>
        </StyledHeader>
    )
}