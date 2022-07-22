import React from "react";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ThemeToggler from "./ThemeToggler";
import logoDark from "../images/logo-dark.png";
import logoLight from "../images/logo-light.png";

function NavbarComp({ theme }) {
    const roboTheme = theme === "light" ? false : true;

    return (
        <Navbar
            collapseOnSelect
            expand='lg'
            variant={!roboTheme ? "dark" : "light"}
        >
            <Container className='me-auto'>
                <Navbar.Brand href='#home'>
                    <Image
                        src={roboTheme ? logoLight : logoDark}
                        style={{ width: "30%", paddingRight: "10px" }}
                        alt='logo'
                    />
                    <p className='d-inline p-3 fs-3 '>RoboMed</p>
                    <ThemeToggler theme={theme} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav
                        variant='pills'
                        className='ms-auto'
                        defaultActiveKey='#home'
                    >
                        <Nav.Item>
                            <Nav.Link href='#home'>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#registrationForm'>
                                Registration Form
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#about'>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#service'>Service</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#faq'>FAQ</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;
