import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { HeaderContainer } from "./Header.style";
import { memo } from 'react';
import { FaUserCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImExit } from "react-icons/im";

const Header = memo(() =>  {
    return(
            <HeaderContainer>
                <Navbar bg="dark" data-bs-theme="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/home">
                            <AiOutlineSafetyCertificate size={35} color="green"/> {' '} PassGuard
                        </Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/user/profile" className="">
                                    <span className="row align-items-center justify-content-center">
                                        <FaUserCog size={35} color="green"/>
                                        Config.
                                    </span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/logout">
                                    <span className="row align-items-center justify-content-center">
                                        <ImExit size={35} color="red"/>
                                        Sair
                                    </span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
            </HeaderContainer>
        );
    }
);

export default Header;