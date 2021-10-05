import {StyledHeader,Nav,Logo} from './styles/Header.styled'
import {Container} from './styles/Container.styled'
import {Button} from './styles/Button.styled'
import { Flex } from './styles/Flex'
import  {Sidebar}from './Sidebar'


var showSidebar=true
var sidebarwidth =showSidebar ?'30vw':'0';
export default function Header(){
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/Logo.svg' />
                    <Button onClick={!showSidebar}>

                    </Button>
                </Nav>
                <Flex>
                    <div>
                        <h3>Graficas aqui</h3>
                    </div>
                </Flex>
                
            </Container>
        </StyledHeader>
    )
}