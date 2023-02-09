import React from 'react';
import './Header.css'
import { BsTelephone, IconName } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Image/Logo.png'
const Header = () => {
    return (
        <div>
            <div className="header-top">

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className='top-left'>Trendy theme for companies, agencies and startups</p>
                        </div>
                        <div className="col-md-6">
                            <div className='top-header'>
                                <BsTelephone></BsTelephone>
                                <a href="+44 141 552 3000">+44 141 552 3000</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-area">
                <div className="container">

                    <Navbar  expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Page</Nav.Link>
                                    <Nav.Link href="#action2">Service</Nav.Link>
                                    <Nav.Link href="#action2">Portfolio</Nav.Link>
                                    <Nav.Link href="#action2">Blog</Nav.Link>
                                    <Nav.Link href="#action2">Contact</Nav.Link>
                                    
                                </Nav>
                                <Form className="d-flex">
                                    
                                    <Button variant="outline-success" className='login'>Login</Button>
                                    <span>or</span>
                                    <Button className='login' variant="outline-success">Create account</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default Header;