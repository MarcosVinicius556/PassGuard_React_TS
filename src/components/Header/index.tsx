import { Container, Navbar } from "react-bootstrap";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { HeaderContainer } from "./Header.style";
import { memo } from 'react';

const Header = memo(() =>  {
    return(
            <HeaderContainer>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <AiOutlineSafetyCertificate size={35} color="green"/> {' '} PassGuard
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </HeaderContainer>
        );
    }
);

export default Header;