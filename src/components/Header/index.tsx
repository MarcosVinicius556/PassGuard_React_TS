import { Container, Navbar, NavbarText } from "react-bootstrap";
import { HeaderContainer } from "./Header.style";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function Header() {
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